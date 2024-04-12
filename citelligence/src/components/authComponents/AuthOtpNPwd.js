import React, { useContext } from 'react'
import auth from '../../app/styles/auth.module.css'
import { useFormik } from 'formik';
import { authPwdSchema } from '@/schemas/authSchema';
import { authOtpSchema } from '@/schemas/authSchema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faEllipsis, faKey } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import authContext from '@/contexts/AuthContext';
import { getSession, signIn, useSession } from 'next-auth/react';

export default function AuthOtpNPwd({ isOtpPrcsType, backToAuthPrcs, isFgtPwdPrcs }) {
  // Form Handling:
  const initValObj = (isOtpPrcsType) ? { authOtpInpt: "" } : { authPwdInpt: "" };
  const validationSchema = (isOtpPrcsType) ? authOtpSchema : authPwdSchema;

  const getAuthContxt = useContext(authContext);

  const authFormik = useFormik({
    initialValues: initValObj,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.info("------ OTP OR PASSWORD Values", values);

      console.log(getAuthContxt.state)
      const data = await fetch("http://localhost:3000/api/auth/EmailOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userOTP:values.authOtpInpt,
        })
      })
      const res = await data.json();
      if (res.ok) {
        const session = await getSession();
        if(session.exists){
          //redirect to dashboard
        }else{
          getAuthContxt.update({ isNewAccDone: true });
        }
      }else{
        authFormik.errors.authOtpInpt = res.msg;
      }
    },
  })
  return (
    <form onSubmit={authFormik.handleSubmit} className={auth.signUpInptWrapper}>
      <p onClick={backToAuthPrcs} className={auth.backToDiffOptBtn}>
        <FontAwesomeIcon icon={faArrowLeftLong}
          style={{
            marginRight: "5px"
          }}
        />
        Would you want to proceed with a {(isOtpPrcsType) ? "Password" : "OTP"}?
      </p>
      <fieldset className={auth.otpInptWrapper}>
        <legend>
          {(isOtpPrcsType) ?
            <FontAwesomeIcon icon={faEllipsis}
              style={{
                color: "#343434df",
                marginRight: "5px",
                fontSize: "14px"
              }}
            />
            :
            <FontAwesomeIcon icon={faKey}
              style={{
                color: "#343434df",
                marginRight: "5px",
                fontSize: "14px"
              }}
            />
          }
          {(isOtpPrcsType) ? "One Time Password" : (isFgtPwdPrcs == undefined) ? "Password" : (isFgtPwdPrcs != undefined && isFgtPwdPrcs == true) ? "New Password" : "Something Wrong, Please back!"}
        </legend>
        <input
          type="text"
          name={(isOtpPrcsType) ? "authOtpInpt" : "authPwdInpt"}
          id="authOtpInpt"
          placeholder={(isOtpPrcsType) ? "Enter OTP" : (isFgtPwdPrcs == undefined) ? "Enter Your Account Password" : (isFgtPwdPrcs != undefined && isFgtPwdPrcs == true) ? "Enter New Password To Account" : "Something Wrong, Please back!"}
          value={(isOtpPrcsType) ? authFormik.values.authOtpInpt : authFormik.values.authPwdInpt}
          onChange={authFormik.handleChange} />
        <button>
          <FontAwesomeIcon icon={faCircleCheck}
            style={{
              color: "#343434df",
              marginRight: "5px",
              fontSize: "14px"
            }}
          />
          Validate</button>
      </fieldset>
      <p className={auth.validtMsg}> {(isOtpPrcsType) ? authFormik.errors.authOtpInpt : authFormik.errors.authPwdInpt}</p>
    </form>
  )
}

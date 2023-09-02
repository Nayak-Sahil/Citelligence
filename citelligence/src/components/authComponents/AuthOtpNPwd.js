import React from 'react'
import auth from '../../app/styles/auth.module.css'
import { useFormik } from 'formik';
import { authPwdSchema } from '@/schemas/authSchema';
import { authOtpSchema } from '@/schemas/authSchema';

export default function AuthOtpNPwd({ isOtpPrcsType, backToAuthPrcs, isFgtPwdPrcs }) {
  // Form Handling:
  const initValObj = (isOtpPrcsType) ? {authOtpInpt: ""} : {authPwdInpt: ""};
  const validationSchema =  (isOtpPrcsType) ? authOtpSchema : authPwdSchema;

  const authFormik = useFormik({
    initialValues: initValObj,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.info("------ OTP OR PASSWORD Values", values);
    },
  })
  console.info(authFormik.errors);
  return (
    <form onSubmit={authFormik.handleSubmit} className={auth.signUpInptWrapper}>
      <p onClick={backToAuthPrcs} className={auth.backToDiffOptBtn}><i class="fa-solid fa-arrow-left-long"></i> Would you want to proceed with a {(isOtpPrcsType) ? "Password" : "OTP"}?</p>
      <fieldset className={auth.otpInptWrapper}>
        <legend>
          {(isOtpPrcsType) ? <i class="fa-solid fa-ellipsis"></i> : <i class="fa-solid fa-key"></i>} {(isOtpPrcsType) ? "One Time Password" : (isFgtPwdPrcs == undefined) ? "Password" : (isFgtPwdPrcs != undefined && isFgtPwdPrcs == true) ? "New Password" : "Something Wrong, Please back!"}
        </legend>
        <input
          type="text"
          name={(isOtpPrcsType) ? "authOtpInpt" : "authPwdInpt"}
          id="authOtpInpt" 
          placeholder={(isOtpPrcsType) ? "Enter OTP" : (isFgtPwdPrcs == undefined) ? "Enter Your Account Password" : (isFgtPwdPrcs != undefined && isFgtPwdPrcs == true) ? "Enter New Password To Account" : "Something Wrong, Please back!"}
          value={(isOtpPrcsType) ? authFormik.values.authOtpInpt : authFormik.values.authPwdInpt}
          onChange={authFormik.handleChange} />
        <button><i class="fa-regular fa-circle-check"></i> Validate</button>
      </fieldset>
      <p className={auth.validtMsg}> {(isOtpPrcsType) ? authFormik.errors.authOtpInpt : authFormik.errors.authPwdInpt}</p>
    </form>
  )
}

import React, { useContext, useState } from 'react'
import auth from '../../app/styles/auth.module.css'
import AuthOtpNPwd from './AuthOtpNPwd'
import authContext from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCommentDots, faKey } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
export default function EmailOMoAuth({ isSignUp, title, description }) {
  const getAuthContxt = useContext(authContext);

  const backToEmailChange = () => {
    getAuthContxt.update({});
  }

  const [authPrcs, setAuthPrcs] = useState(null);

  // back to OTP and PWD Options
  const backToAuthPrcs = () => {
    setAuthPrcs(null);
  }

  // process to OTP for auth
  const processOtpAuth = () => {
    setAuthPrcs({ isOtpPrcs: true });
  }

  // process to password for auth
  const processPwdAuth = () => {
    setAuthPrcs({ isOtpPrcs: false });
  }

  // process to create new password
  const forgetPwdPrcs = () => {
    setAuthPrcs({ isForgetPwd: true});
  }

  return (
    <>
      <div className={auth.authEmailHead}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={auth.authEmailSignUpInptSec}>
        <div className={auth.emailSignUpBoxWrap}>
          <div className={auth.emailSignUpBackWrap}>
            <a onClick={backToEmailChange} href='#'>
              <FontAwesomeIcon icon={faArrowLeftLong} 
                style={{
                  fontSize:"16px",
                  marginRight:"10px",
                  position:"relative",
                  top:"2px"
                }}
              />
              Want to Change?</a>
          </div>
          <div className={auth.emailSignUpLabelWrap}>
            <p className={auth.emailSignUpLabel}> 
            <FontAwesomeIcon icon={faCircleCheck} 
              style={{
                fontSize:"16px",
                marginRight:"5px"
              }}
            />{getAuthContxt.state.userInptVal}</p>
          </div>
        </div>

        {
          (authPrcs == null) ? 
          <AuthPrcsOpt processOtpAuth={processOtpAuth} processPwdAuth={processPwdAuth} isSignUp={isSignUp} forgetPwdPrcs={(!isSignUp) ? forgetPwdPrcs : ""} /> : (authPrcs.isOtpPrcs != undefined && authPrcs.isOtpPrcs == true) ? 
          <AuthOtpNPwd backToAuthPrcs={backToAuthPrcs} isOtpPrcsType={authPrcs.isOtpPrcs} /> :(authPrcs.isOtpPrcs != undefined && authPrcs.isOtpPrcs == false) ?
          <AuthOtpNPwd backToAuthPrcs={backToAuthPrcs} isOtpPrcsType={authPrcs.isOtpPrcs} /> : ""
        }

        {
          (authPrcs != null && authPrcs.isForgetPwd) ? <AuthOtpNPwd backToAuthPrcs={backToAuthPrcs} isFgtPwdPrcs={authPrcs.isForgetPwd}/> : ""
        }
      </div>
    </>
  )
}



const AuthPrcsOpt = ({ isSignUp, processOtpAuth, processPwdAuth, forgetPwdPrcs }) => {
  return (
    <div className={auth.authPrcsOptWrap}><p className={auth.authSignUpPrcs}>Would you like to proceed with <span className={auth.authHighlight}>OTP</span> or a <span className={auth.authHighlight}>Password</span>?</p>

      <button onClick={processOtpAuth} type='button' className={auth.OtpSignupEmailBtn}>
        <FontAwesomeIcon icon={faCommentDots} 
          style={{
            color:"#343434df",
            marginRight: "10px",
            fontSize: "14px"
          }}
        />
        {(isSignUp) ? "Sign Up" : "Sign In"} With OTP
      </button>

      <button onClick={processPwdAuth} type='button' className={auth.pwdSignUpEmailBtn}>
      <FontAwesomeIcon icon={faKey} 
          style={{
            color:"#343434df",
            marginRight: "10px",
            fontSize: "14px"
          }}
        />
        {(isSignUp) ? "Sign Up" : "Sign In"} with Password
      </button>

      {(isSignUp) ? "" : <p onClick={forgetPwdPrcs} className={auth.signUpLstPwdLabel}>
      <FontAwesomeIcon icon={faKey} 
          style={{
            color:"#343434df",
            marginRight: "5px",
            fontSize: "14px"
          }}
        />
        Lost Password (New Key)?</p>}
    </div>
  );
}
import React from 'react'
import auth from '../../app/styles/auth.module.css'

export default function AuthOtpNPwd({isOtpPrcsType, backToAuthPrcs}) {
  return (
    <div className={auth.signUpInptWrapper}>
        <p onClick={backToAuthPrcs} className={auth.backToDiffOptBtn}><i class="fa-solid fa-arrow-left-long"></i> Would you want to proceed with a {(isOtpPrcsType) ? "Password" : "OTP"}?</p>
        <fieldset className={auth.otpInptWrapper}>
            <legend>
              {(isOtpPrcsType) ? <i class="fa-solid fa-ellipsis"></i> : <i class="fa-solid fa-key"></i>} {(isOtpPrcsType) ? "One Time Password" : "Password"}
            </legend>
            <input type="text" name="authOtpInpt" id="authOtpInpt" placeholder={(isOtpPrcsType) ? "Enter OTP" : "Enter Password"}/>
            <button><i class="fa-regular fa-circle-check"></i> Validate</button>
        </fieldset>
        <p className={auth.validtMsg}>Please Verify first Email!</p>
    </div>
  )
}

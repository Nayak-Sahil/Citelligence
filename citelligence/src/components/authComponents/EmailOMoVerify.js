"use client"
import React, { useContext, useRef } from 'react'
import auth from '../../app/styles/auth.module.css'
import authContext from '@/contexts/AuthContext'


export default function EmailOMoVerify({authOpt}) {
    const getAuthContxt = useContext(authContext);
    const isAlreadyHaveAcc = ()=>{
        console.warn(userInptVal.current);
        getAuthContxt.update({isAlreadyHaveAcc: false, userInptVal: userInptVal.current.value});
    }
    
    const userInptVal = useRef(null);

    if(authOpt == "Email"){
        // email search in DB
    }else{
        // mobile search in DB
    }

    return (
        <>
            <div className={auth.authEmailHead}>
                <h2>Let's Get Started.</h2>
                <p>Please check your {authOpt} first to determine whether you already have an account with us.</p>
            </div>

            <div className={auth.authEmailInptSec}>
                <div className={auth.emailBoxWrap}>
                    <div className={auth.emailIconWrap}>
                        {
                            (authOpt == "Email") ? <i className="far fa-envelope"></i>  : <i class="fa-solid fa-mobile-screen-button"></i>
                        }
                    </div>
                    <div className={auth.emailInptWrap}>
                        <label for="newUsrEmailIn">
                        {
                            (authOpt == "Email") ? "Email Address"  : "Mobile No."
                        } <span className={auth.rqrdInpt}>*</span></label>
                        <input ref={userInptVal} type={
                            (authOpt == "Email") ? "email"  : "text"
                        } name="authUserInpt" id="newUsrEmailInpt" placeholder={
                            (authOpt == "Email") ? "joe@gmail.com"  : "Enter your mobile no."
                        } required="" />
                    </div>
                </div>
                <div className={auth.verifynErroWrap}>
                    <button onClick={isAlreadyHaveAcc} type='button' className={auth.verfyEmailBtn}>Next <i class="fa-solid fa-angles-right"></i></button>
                    <p className={auth.validtMsg}>Please Verify first Email!</p>
                </div>
            </div>
        </>
    )
}

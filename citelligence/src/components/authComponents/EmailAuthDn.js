"use client"
import React, { useContext, useMemo } from 'react'
import auth from '../../app/styles/auth.module.css'
import EmailOMoVerify from './EmailOMoVerify'
import EmailOMoAuth from './EmailOMoAuth'
import authContext from '@/contexts/AuthContext'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import AuthProfile from './AuthProfile'
import { useRouter } from 'next/navigation'
// Email & Mobile Auth Page's Right Part Dynamic Component 
export default function EmailAuthDn({ authOpt }) {
    const getAuthContxt = useContext(authContext);
    const router = useRouter();
    useMemo(() => {
        (getAuthContxt.state.isNewAccDone == undefined) ? getAuthContxt.update({}) : ""
    },
        []);
    const handleClick = () => {
        getAuthContxt.state.isNewAccDone = undefined;
        getAuthContxt.state.isNewAccDone = false;
        router.push('./')
    };

    return (
        <>
            <div className={auth.authHead}>
                <h1>Cite<span className={auth.authHighlight}>lligence</span></h1>
                <p>Welcome to Citelligence!, Verify Your Identity.</p>
                <button className={auth.backToDiffOptBtn} onClick={handleClick}> <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "8px", fontSize: "14px" }} /> Change Authentication Option 
                </button>
            </div>
            <div className={auth.authEmailVerifyWrap}> {(getAuthContxt.state.isNewAccDone != undefined && getAuthContxt.state.isNewAccDone === true) ? <AuthProfile /> : (getAuthContxt.state.isAlreadyHaveAcc === undefined) ? <EmailOMoVerify authOpt={authOpt} /> : (getAuthContxt.state.isAlreadyHaveAcc === true) ? <EmailOMoAuth isSignUp={false} title="🎉 Great!, You have an account already!" description="Please, Sign In Here to access your account." /> : <EmailOMoAuth isSignUp={true} title="🎉 Let's Get Started! Create Your Account Today!" description="Please, Verify your Email." />}
            </div> </>)
}
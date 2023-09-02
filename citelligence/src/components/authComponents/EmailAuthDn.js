"use client"
import React, {useContext} from 'react'
import auth from '../../app/styles/auth.module.css'
import EmailOMoVerify from './EmailOMoVerify'
import EmailOMoAuth from './EmailOMoAuth'
import authContext from '@/contexts/AuthContext'
import Link from 'next/link'


// Email & Mobile Auth Page's Right Part Dynamic Component
export default function EmailAuthDn({authOpt}) {
    const getAuthContxt = useContext(authContext);
    console.warn(getAuthContxt.state);
    return (
        <>
            <div className={auth.authHead}>
                <h1>Cite<span className={auth.authHighlight}>lligence</span></h1>
                <p>Welcome to Citelligence!, Verify Your Identity.</p>
                <Link className={auth.backToDiffOptBtn} href="./"><i class="fa-solid fa-arrow-left-long"></i> Change Authentication Option</Link>
            </div>

            <div className={auth.authEmailVerifyWrap}>
                {
                   (getAuthContxt.state.isAlreadyHaveAcc === undefined) ? <EmailOMoVerify authOpt={authOpt} /> : (getAuthContxt.state.isAlreadyHaveAcc === true) ? <EmailOMoAuth isSignUp={false} title="🎉 Great!, You have an already account!" description="Please, Sign In Here to access your account." /> : <EmailOMoAuth isSignUp={true} title="🎉 Let's Get Started! Create Your Account Today!" description="Please, Verify your Email." />  
                }
            </div>
        </>
    )
}

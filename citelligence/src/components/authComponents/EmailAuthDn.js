"use client"
import React, {useContext, useMemo} from 'react'
import auth from '../../app/styles/auth.module.css'
import EmailOMoVerify from './EmailOMoVerify'
import EmailOMoAuth from './EmailOMoAuth'
import authContext from '@/contexts/AuthContext'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import AuthProfile from './AuthProfile'


// Email & Mobile Auth Page's Right Part Dynamic Component
export default function EmailAuthDn({authOpt}) {
    const getAuthContxt = useContext(authContext);
    
    useMemo(()=>{
        (getAuthContxt.state.isNewAccDone == undefined) ?
        getAuthContxt.update({ }) : ""
    }, []);

    return (
        <>
            <div className={auth.authHead}>
                <h1>Cite<span className={auth.authHighlight}>lligence</span></h1>
                <p>Welcome to Citelligence!, Verify Your Identity.</p>
                <Link className={auth.backToDiffOptBtn} href="./">
                    <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight:"8px",fontSize:"14px"}} /> Change Authentication Option
                    </Link>
            </div>

            <div className={auth.authEmailVerifyWrap}>
                {
                   (getAuthContxt.state.isNewAccDone != undefined && getAuthContxt.state.isNewAccDone === true) ? <AuthProfile /> : (getAuthContxt.state.isAlreadyHaveAcc === undefined) ? <EmailOMoVerify authOpt={authOpt} /> : (getAuthContxt.state.isAlreadyHaveAcc === true) ? <EmailOMoAuth isSignUp={false} title="🎉 Great!, You have an already account!" description="Please, Sign In Here to access your account." /> : <EmailOMoAuth isSignUp={true} title="🎉 Let's Get Started! Create Your Account Today!" description="Please, Verify your Email." />  
                }
            </div>
        </>
    )
}

"use client"
import React, { useContext, useRef } from 'react'
import auth from '../../app/styles/auth.module.css'
import authContext from '@/contexts/AuthContext'
import { useFormik } from 'formik'
import { authEmailSchema } from '@/schemas/authSchema'
import { authMobileSchema } from '@/schemas/authSchema'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faMobileScreenButton, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function EmailOMoVerify({ authOpt }) {
    const getAuthContxt = useContext(authContext);
    const isAlreadyHaveAcc = () => {
        console.warn(userInptVal.current);
        // getAuthContxt.update({ isAlreadyHaveAcc: false, userInptVal: userInptVal.current.value });
    }

    // userInpt HTML Element
    const userInptVal = useRef(null);


    // Form Handling:
    const initValObj = (authOpt == "Email") ? {authEmailInpt: ''} : {authMobileInpt: ''};
    const validationSchema = (authOpt == "Email") ? authEmailSchema : authMobileSchema;
    const authFormik = useFormik({
        initialValues: initValObj,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.info("------ Values", values);
            if(values.authEmailInpt != "" || values.authMobileInpt != ""){
                getAuthContxt.update({ isAlreadyHaveAcc: false, userInptVal: userInptVal.current.value });
            }
        },
    })
    console.info(authFormik.errors);
    return (
        <>
            <div className={auth.authEmailHead}>
                <h2>Let's Get Started.</h2>
                <p>Please check your {authOpt} first to determine whether you already have an account with us.</p>
            </div>

            <form onSubmit={authFormik.handleSubmit} className={auth.authEmailInptSec}>
                <div className={auth.emailBoxWrap}>
                    <div className={auth.emailIconWrap}>
                        {
                            (authOpt == "Email") ? (authFormik.errors.authEmailInpt == "The provided email isn't valid!") ? 
                            <FontAwesomeIcon icon={faTriangleExclamation}  style={{color:`rgb(255, 63, 63)`}}/>
                            :
                            <FontAwesomeIcon icon={faEnvelope} /> : <FontAwesomeIcon icon={faMobileScreenButton} />
                        }
                    </div>
                    <div className={auth.emailInptWrap}>
                        <label for="newUsrEmailIn">
                            {
                                (authOpt == "Email") ? "Email Address" : "Mobile No."
                            }<span className={auth.rqrdInpt}>*</span>
                        </label>

                        <input ref={userInptVal} type={
                            (authOpt == "Email") ? "email" : "text"
                        } name={(authOpt == "Email") ? "authEmailInpt" : "authMobileInpt"} id="newUsrEmailInpt" placeholder={
                            (authOpt == "Email") ? "joe@gmail.com" : "Enter your mobile no."
                        } value={(authOpt == "Email") ? authFormik.values.authEmailInpt : authFormik.values.authMobileInpt} onChange={authFormik.handleChange} />
                    </div>
                </div>
                <div className={auth.verifynErroWrap}>
                    <button onClick={isAlreadyHaveAcc} type='submit' className={auth.verfyEmailBtn}>Next 
                    <FontAwesomeIcon icon={faAnglesRight} style={{marginLeft:"5px"}}/>
                    </button>
                    
                    <p className={auth.validtMsg}>{(authOpt == "Email") ? authFormik.errors.authEmailInpt : authFormik.errors.authMobileInpt}</p>
                </div>
            </form>
        </>
    )
}

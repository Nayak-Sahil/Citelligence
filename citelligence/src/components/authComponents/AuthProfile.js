import React, { useRef } from 'react'
import auth from '../../app/styles/auth.module.css'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import { authAccPrfSchema } from '@/schemas/authSchema';
export default function AuthProfile() {

    const fnameInpt = useRef(null);
    const lnameInpt = useRef(null);
    const zInpt = useRef(null);
    const dobInpt = useRef(null);
    
    const authFormik = useFormik({
        initialValues: {
            fnameInpt: "",
            lnameInpt: "",
            zSelInpt: "",
            dobInpt: ""
        },
        validationSchema: authAccPrfSchema,
        onSubmit: (values) => {
          console.info("user account profile", values);
            //make sure you update context state with null object
        },
    })

    console.info(authFormik, authFormik.errors);

    return (
        <>
            <div className={auth.authEmailHead}>
                <h2>Just One Step!.</h2>
                <p>Complete Your Profile Details.</p>
            </div>

            <form className={auth.prflInptForm} onSubmit={authFormik.handleSubmit} >
            <div className={auth.prfInptsWrap}>
                <div className={auth.nameBoxWrap}>
                    <div className={auth.fnameInptWrap}>
                        <label htmlhtmlFor="fnameInpt">
                            First Name<span className={auth.rqrdInpt}>*</span>
                        </label>

                        <input ref={fnameInpt} type="text" name="fnameInpt" id="fnameInpt" placeholder="Enter your first name" value={authFormik.values.fnameInpt} onChange={authFormik.handleChange} />

                        <p className={auth.validtMsg}>{authFormik.errors.fnameInpt}</p>
                    </div>
                    <div className={auth.lnameInptWrap}>
                        <label htmlhtmlFor="lnameInpt">
                            Last Name<span className={auth.rqrdInpt}>*</span>
                        </label>

                        <input ref={lnameInpt} type="text" name="lnameInpt" id="lnameInpt" placeholder="Enter your last name" value={authFormik.values.lnameInpt} onChange={authFormik.handleChange} />
                        
                        <p className={auth.validtMsg}>{authFormik.errors.lnameInpt}</p>
                    </div>
                </div>
                <div className={auth.dobBoxWrap}>
                    <div className={auth.dobInptWrap}>
                        <label htmlhtmlFor="dobInpt">
                            Date of Birth <span className={auth.rqrdInpt}>*</span>
                        </label>

                        <input ref={dobInpt} type="date" name="dobInpt" id="dobInpt" value={authFormik.values.dobInpt} onChange={authFormik.handleChange}/>

                        <p className={auth.validtMsg}>{authFormik.errors.dobInpt}</p>
                    </div>
                    <div className={auth.zInptWrap}>
                        <label htmlhtmlFor="zInpt">
                            Gender <span className={auth.rqrdInpt}>*</span>
                        </label>

                        <select ref={zInpt} className={auth.zSelInpt} name="zSelInpt" id="zSelInpt" value={authFormik.values.zSelInpt} onChange={authFormik.handleChange}>
                            <option value="none" selected disabled hidden>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>

                        <p className={auth.validtMsg}>{authFormik.errors.zSelInpt}</p>
                    </div>
                </div>
            </div>

            <div className={auth.saveNErroWrap}>
                <button type="submit" className={auth.verfyEmailBtn}>Save
                    <FontAwesomeIcon icon={faCircleCheck} style={{ marginLeft: "5px" }} />
                </button>

                <p className={auth.validtMsg}>{}</p>
            </div>
            </form>
        </>
    )
}

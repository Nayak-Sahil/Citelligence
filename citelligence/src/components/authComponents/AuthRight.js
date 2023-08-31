"use client"
// import Image from 'next/image'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFingerprint, faIdCardClip, faMobile, faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import next from '../../../public/citelligence1.png'
import auth from '../../app/styles/auth.module.css'

const AuthRight = () => {
    return (
        <>
            <div className={auth.authHead}>
                {/* <Image src={next} className="mx-16" width={100} alt='logo'/> */}
                <h1>Cite<span className={auth.authHighlight}>lligence</span></h1>
                <h2>Login or Signup in <span className={auth.authHighlight}>seconds</span>.</h2>
                <p>Use your email or another service to continue with Citelligence (it's free)!</p>
            </div>

            <div className={auth.authBtnsWrap}>
                <ButtonComponent text='Continue with Google' icon={faGoogle} />
                <ButtonComponent text='Continue with Meripehchaan' icon={faFingerprint} />
                {/* <ButtonComponent text='Continue with Aadhar' icon={faIdCardClip} /> */}
                <ButtonComponent text='Continue with Email' icon={faEnvelope} type={"Email"} />
                <ButtonComponent text='Continue with Mobile' icon={faMobile} type={"Mobile"} />
            </div>

            <div className={auth.clientAgreeText}>
                <p>By Continuing, You agree to Citelligence's <Link href='/' className='underline text-blue-700'>Terms & Conditions</Link> & <Link href='/' className='underline text-blue-700'>Privacy Policy</Link>
                </p>
            </div>
        </>
    )
}

export default AuthRight;


const ButtonComponent = ({ text, icon, type }) => {
    const router = useRouter();
    const handleClick = (type) => {
        console.log(type);
        if (type === "Email" || type === "Mobile") {
            router.push(`/Authentication/${type}`)
        }
    }

    return (
        <button className={auth.authDiffBtns} onClick={() => { handleClick(type) }}>
            <span className={auth.authBtnIcon}>
            {
                (type == "Email" || type == "Mobile") ? 
                    (type == "Email") ? <i class="fa-regular fa-envelope"></i> : (type == "Mobile") ? <i class="fa-solid fa-mobile-screen"></i> : ""
                : 
                    <FontAwesomeIcon width={25} className='mx-2 text-2xl text-[#004fd6]' icon={icon}/>
            }
            </span>
            <span className={auth.authBtnTxt}>{text}</span>
        </button>
    )
}

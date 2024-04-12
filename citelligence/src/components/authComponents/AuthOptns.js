"use client"
// import Image from 'next/image'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faIdCardClip, faMobile, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import auth from '../../app/styles/auth.module.css'
import { signIn } from 'next-auth/react'

const AuthOptns = () => {
    const router = useRouter();
    const handleGoogle = async () => {
        await signIn("google", { callbackUrl: `http://localhost:3000/Authentication/Profile` });
    }

    const handleClick = async (type) => {
        if (type === "Email" || type === "Mobile") {
            router.push(`/Authentication/${type}`)
        }
    }

    return (
        <>
            <div className={auth.authHead}>
                {/* <Image src={next} className="mx-16" width={100} alt='logo'/> */}
                <h1>Cite<span className={auth.authHighlight}>lligence</span></h1>
                <h2>🙋‍♂️ <span>Welcome User!</span> Login or Signup Here.</h2>
                <p>Use your email or another service to continue with Citelligence (it's free)!</p>
            </div>

            <div className={auth.authBtnsWrap}>
                <ButtonComponent text='Continue with Google' handle={handleGoogle} type={"Google"} icon={faGoogle} />
                <ButtonComponent text='Continue with Meripehchaan' handle={handleClick} icon={faFingerprint} />
                {/* <ButtonComponent text='Continue with Aadhar' icon={faIdCardClip} /> */}
                <ButtonComponent text='Continue with Email' handle={handleClick} icon={faEnvelope} type={"Email"} />
                <ButtonComponent text='Continue with Mobile' handle={handleClick} icon={faMobileScreenButton} type={"Mobile"} />
            </div>

            <div className={auth.clientAgreeText}>
                <p>By Continuing, You agree to Citelligence's <Link href='/' className='underline text-blue-700'>Terms & Conditions</Link> & <Link href='/' className='underline text-blue-700'>Privacy Policy</Link>
                </p>
            </div>
        </>
    )
}

export default AuthOptns;


const ButtonComponent = (props) => {
    return (
        <button className={auth.authDiffBtns} onClick={() => { props.handle(props.type) }}>
            <span className={auth.authBtnIcon}>
                {
                    // (type == "Email" || type == "Mobile") ? 
                    //     (type == "Email") ? <i className="fa-regular fa-envelope"></i> : (type == "Mobile") ? <i className="fa-solid fa-mobile-screen"></i> : ""
                    // : 
                    <FontAwesomeIcon className='mx-2 text-md' icon={props.icon} />
                }
            </span>
            <span className={auth.authBtnTxt}>{props.text}</span>
        </button>
    )
}

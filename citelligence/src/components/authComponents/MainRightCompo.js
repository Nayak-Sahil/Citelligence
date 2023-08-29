"use client"
import Image from 'next/image'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFingerprint, faIdCardClip, faMobile, faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import next from '../../../public/next.svg'

const MainRightCompo = () => {
  return (
    <div className="flex flex-col w-full my-5 text-center gap-5"> {/* wrap div */}
        <div className="flex flex-col gap-4">  {/* //logo,heading and greeting div */}
            <Image src={next} className="mx-16" width={150} alt='logo'/>
            <h1 className='text-[30px] font-semibold text-[#004fd6]'>Login or Signup in seconds</h1>
            <p className='my-3 w-full font-semibold text-[18px] text-ellipsis overflow-hidden truncate'>Continue with anyone of the following</p>
        </div>

        {/* div for buttons  */}
        <div className='border rounded-md flex flex-col w-3/4 m-auto p-3 gap-4'>
                <ButtonComponent text='Continue with Google' icon={faGoogle}/>
                <ButtonComponent text='Continue with Meripehchaan' icon={faFingerprint}/>
                <ButtonComponent text='Continue with Aadhar' icon={faIdCardClip}/>
                <ButtonComponent text='Continue with Email' icon={faEnvelope} type={"Email"}/>
                <ButtonComponent text='Continue with Mobile' icon={faMobile} type={"Mobile"}/>
        </div>

        {/* the terms and condition one div */}
        <div className='font-semibold'>
            <p>
                By Continuing,
            </p>
            <p>
                You agree to Citelligence's
            </p>
            <pre> 
                <Link href='/' className='underline text-blue-700'>Terms & Conditions</Link> & <Link href='/' className='underline text-blue-700'>Privacy Policy</Link>
            </pre>
        </div>
    </div>
  )
}

export default MainRightCompo;


const ButtonComponent = ({text,icon,type}) => {
    const router = useRouter();
    const handleClick = (type) =>{
        if(type === "Email" || type === "Mobile"){
            router.push(`/Authentication/${type}`)
        }
    }

  return (
    <button className='flex border border-[#004fd6] w-4/5 self-center p-3 rounded hover:bg-slate-100' onClick={() => {handleClick(type)}}>
        <FontAwesomeIcon width={25} className='mx-2 text-2xl text-[#004fd6]' icon={icon}
        />
        {text}
    </button>
  )
}

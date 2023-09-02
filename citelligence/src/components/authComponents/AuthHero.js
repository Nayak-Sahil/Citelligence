import React from 'react'
import auth from '../../app/styles/auth.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import AuthFeatCard from './AuthFeatCard'
import Image from 'next/image'
import img from '../../../public/auth.gif'
const AuthHero = () => {
  return (
    <div className={auth.authLeftGlass}>
      <div className={auth.authLeftHead}>
        <h1>🎉 Get Start by Exploring Citelligence, Discover Helpful Schemes.</h1>
      </div>
      <Image src={img} width={250} alt="Authentication"/>
      <div className={auth.authFeatCardWrap} >
        {/* <AuthFeatCard title={"Authentication"} descrp={"Secure with SHA512 Encryption"}/> */}
        <AuthFeatCard title={"Authentication"} descrp={"Secure with SHA512 Encryption"}/>
        {/* <AuthFeatCard title={"Authentication"} descrp={"Secure with SHA512 Encryption"}/> */}
      </div>
    </div>
  )
}

export default AuthHero
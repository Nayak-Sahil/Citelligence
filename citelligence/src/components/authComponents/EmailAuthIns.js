import React, { useEffect } from 'react'
import auth from '../../app/styles/auth.module.css'
import Image from 'next/image'
import checkAccount from '../../../public/auth/checkAccount.gif'
import emailSignUp from '../../../public/auth/signup.gif'
import emailSignIn from '../../../public/auth/signin.gif'
import emailVerify from '../../../public/auth/emailVerify.gif'
import { parse } from 'node-html-parser';

// Email & Mobile Auth page's Instruction Wrapper
export default function EmailAuthIns(props) {
  const authInstruction = parse(props.authInstruction);
  return (
    <section className={auth.instrtSectBox}>
      <h1>Get access of simplified form of guidlines and grab the benefit.</h1>
      <div className={auth.instrtCtnt}>
        <Image src={(props.step == "checkAcc") ? checkAccount : (props.step == "emailVerify") ? emailVerify : (props.step == "signUp") ? emailSignUp : (props.step == "signIn") ? emailSignIn : ""} width={350}/>
        <p id='instrtLabel'>{authInstruction.innerText}</p>
      </div>
    </section>
  )
}

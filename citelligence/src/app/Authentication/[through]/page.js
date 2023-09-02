"use client"
import React from 'react'
import '../auth.css';
import auth from '../../styles/auth.module.css'
import EmailAuthIns from '@/components/authComponents/EmailAuthIns';
import EmailAuthDn from '@/components/authComponents/EmailAuthDn';

const page = ({ params }) => {
  // console.log(params);
  const through = params.through;
  return (
    <>
      {through !== "Email" && through !== "Mobile" ?
        <div>404:Page Not Found</div>
        :
        <main className={auth.emailAuthWrap}>
          <section className={auth.emailAuthLeft}>
            <EmailAuthIns step="checkAcc" authInstruction="Please take a moment to <span className={auth.authHighlight}>verify your email</span>, and we'll move forward towards a seamless experience." />
          </section>
          <section className={auth.emailAuthRight}>
            <EmailAuthDn authOpt={through} />
          </section>
        </main>
      }
    </>
  )
}

export default page
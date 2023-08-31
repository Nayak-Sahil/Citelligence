import AuthLeft from '@/components/authComponents/AuthLeft';
import AuthRight from '@/components/authComponents/AuthRight'
import React from 'react'
import './auth.css';
import auth from '../styles/auth.module.css'



export const metadata = {
  title: 'Authentication | Citelligence',
  description: "Sign up with Citelligence and discover beneficial schemes. "
}

export default function page() {
  console.log(auth)
  return (
    <main className={auth.mainWrapper}>
      <section className={auth.authLeftWrap}>
        <AuthLeft />
      </section>
      <section className={auth.authRightWrap}>
        <AuthRight />
      </section>
    </main>
  )
}

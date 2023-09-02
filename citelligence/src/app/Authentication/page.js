import AuthHero from '@/components/authComponents/AuthHero';
import AuthOptns from '@/components/authComponents/AuthOptns'
import React from 'react'
import './auth.css';
import auth from '../styles/auth.module.css'



export const metadata = {
  title: 'Authentication | Citelligence',
  description: "Sign up with Citelligence and discover beneficial schemes. "
}

export default function page() {
  return (
    <main className={auth.mainWrapper}>
      <section className={auth.authLeftWrap}>
        <AuthHero />
      </section>
      <section className={auth.authRightWrap}>
        <AuthOptns />
      </section>
    </main>
  )
}

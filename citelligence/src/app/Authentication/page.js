// the main Authentication page

import MainLeftCompo from '@/components/authComponents/MainLeftCompo'
import MainRightCompo from '@/components/authComponents/MainRightCompo'
import React from 'react'

const page = () => {
  return (
    <main className='flex w-3/5 border border-slate-400 h-[650px] self-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md shadow-slate-300'>
        <section className='w-1/2 border m-3 rounded-lg border-slate-400'>
            <MainLeftCompo />
        </section>
        <section className='w-1/2'>
            <MainRightCompo />
        </section>
    </main>
  )
}

export default page
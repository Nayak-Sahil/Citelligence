"use client"
import React from 'react'
import MainRightCompo from '@/components/authComponents/AuthRight'

const page = ({ params }) => {
  console.log(params.through)
  const through = params.through;
  return (
    <>
      {through !== "Email" && through !== "Mobile" ?
        <div>404:Page Not Found</div>
        :
        <main className='flex w-3/5 border border-slate-400 h-[650px] self-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md shadow-slate-300'>
          <section className='w-1/2 border m-3 rounded-lg border-slate-400'>
            {/* Left section will come here */}
          </section>
          <section className='w-1/2'>
            Taking email
          </section>
        </main>
      }
     </>
  ) 
}

export default page
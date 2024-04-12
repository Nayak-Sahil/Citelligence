"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import video1 from '../../../public/video.mp4'
import { useRef, useState } from 'react'
const MainHero = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const playPauseClick = () => {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(play => !play);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full gap-10 mt-20 ">
      <button className='border border-primary px-4 py-3 font-semibold rounded-3xl group hover:scale-105 duration-150'>
        <span className='bg-amber-300 px-4 py-1 rounded-3xl mr-3 text-white'>New</span>
        Get Started with some new schemes
        <FontAwesomeIcon className='ml-2 duration-300 group-hover:scale-x-150 group-hover:scale-y-130' icon={faArrowRight} />
      </button>
      <h1 className='text-center space flex flex-col gap-5'>
        <p className='font-normal'>Discover, Empower</p>
        <span className='text-primary font-semibold'>On Citelligence</span>
      </h1>
      <p className='text-xl sm:w-[550px] w-[420px] font-medium text-center'>
        A plateform to Discover relevent Schemes,
        and to find best relevent among them
      </p>
      <div className='flex gap-5 font-medium'>
        <button className='bg-primary text-white text-lg w-48 p-2 rounded-xl hover:-translate-y-1 duration-150 hover:shadow-lg sm:w-56'>
          Explore Schemes <FontAwesomeIcon icon={faWpexplorer} />
        </button>
        <button className='border border-primary text-primary text-lg w-48 p-2 rounded-xl hover:-translate-y-1 duration-150 hover:shadow-lg sm:w-56'>
          <FontAwesomeIcon icon={faComments} /> Have question?
        </button>
      </div>
      <div>
        <div className="absolute z-20 flex h-[16rem] w-[25rem] backdrop-blur-[1px] rounded-xl justify-center text-lg font-medium items-center text-white group sm:w-[32rem] sm:h-[18rem] lg:w-[52rem] lg:h-[32rem]" style={play ? { backdropFilter: 'blur(0)' } : { backdropFilter: 'blur(1px)' }}>
          {!play
            ?
            <button className='opacity-100 bg-blue-800 px-5 py-3 rounded-3xl group-hover:scale-105 duration-500' onClick={playPauseClick}>
              <FontAwesomeIcon icon={faPlayCircle} className='mr-2' />
              Get Basic idea
            </button>
            :
            <button className='opacity-100 text-blue-800 text-6xl rounded-full scale-0 group-hover:scale-105 duration-500' onClick={playPauseClick}>
              <FontAwesomeIcon icon={faPauseCircle} />
            </button>
          }
        </div>
        <div className="z-10 flex h-[16rem] bg-slate-100 w-[25rem] rounded-xl cursor-pointer justify-center items-center sm:w-[32rem] sm:h-[18rem] lg:w-[52rem] lg:h-[32rem]">
          <video className='h-[32rem]' ref={videoRef}>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  )
}

export default MainHero
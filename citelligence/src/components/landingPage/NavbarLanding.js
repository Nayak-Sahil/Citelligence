import Image from 'next/image'
import citelligenceIcon from '../../../public/Citelligence1.png'

const NavbarLanding = () => {
    return (
        <nav className="h-24 flex justify-between px-28">
            <section className='flex items-center gap-10'>
                <Image src={citelligenceIcon} width={140} />
                <ul className='flex mt-2 text-md font-semibold gap-10 text-black'>
                    <li className='hover:text-primary duration-200 cursor-pointer text-black'>
                        <a className='no-underline'>Home</a>
                    </li>
                    <li className='hover:text-primary duration-200 cursor-pointer text-black'>
                        <a className='no-underline'>About</a>
                    </li>
                    <li className='hover:text-primary duration-200 cursor-pointer text-black'>
                        <a className='no-underline'>Services</a>
                    </li>
                    <li className='hover:text-primary duration-200 cursor-pointer text-black'>
                        <a className='no-underline'>Contact Us</a>
                    </li>
                </ul>
            </section>
            <section className='flex items-center justify-center gap-5 text-md font-semibold'>
                <button className='h-10 px-5 rounded-lg bg-white '>
                    Log in
                </button>
                <button className='h-11 px-5 rounded-lg bg-primary text-white '>
                    Start for free <span className=''>&#10153;</span>
                </button>
            </section>
        </nav>
    )
}

export default NavbarLanding
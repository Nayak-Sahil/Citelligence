"use client"
import Image from 'next/image'
import citelligenceIcon from '../../../public/Citelligence1.png'
import React, { useState } from "react";
import ScrollTo from './ScrollTo';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex items-center justify-center w-full bg-white`}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-max">
            <a href="/#" className="py-5 no-underline">
              <h1 className='text-2xl flex text-primary'>Cite <span className='text-black'>lligence</span></h1>
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="services"
                  >
                    Services
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#"
                  >
                    Emergency Support
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#"
                  >
                    Know Schemes
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#"
                  >
                    About Us
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="contact"
                  >
                    Contact Us
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="no-underline	py-3 text-base font-medium px-7 text-black hover:text-primary"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="no-underline	py-3 text-base font-medium text-white rounded-lg bg-primary px-5 hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <ScrollTo targetId={NavLink}>
        <a
          className={`text-black no-underline flex py-2 text-base font-medium cursor-pointer lg:ml-12 lg:inline-flex ${navItemStyles} hover:underline`}
        >
          {children}
        </a>
        </ScrollTo>
      </li>
    </>
  );
};

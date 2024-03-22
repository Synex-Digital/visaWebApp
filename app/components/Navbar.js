"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import MyImage from './../core/MyImage';

const Navbar = () => {
    const [dropdownOpen, setDeopdownOpen] = useState(false);

    const handleDropdown = () => {
        if (!dropdownOpen) {
            setDeopdownOpen(true)
        } else {
            setDeopdownOpen(false)
        }
    }

    return (
        <header>
            <nav className="shadow-md w-full fixed z-50 bg-primaryGreen6">
                <div className="container mx-auto px-2 flex justify-between items-center py-3">
                    <div className="w-1/5">
                        <Link href={'/'}>
                            <MyImage source='/assets/Logos/PrimaryLogoColor.png' alt='PrimaryLogoColor.png' className='w-20' />
                        </Link>
                    </div>
                    <div className="flex justify-between w-3/5 px-7 text-Black">

                        <div className="">
                            <button onClick={handleDropdown} type="button" className="flex items-center gap-x-1.5">Study Abroad{" "}
                                <span>
                                    <FaAngleDown className="text-xs" />
                                </span>
                            </button>

                            <div className={`absolute top-full -translate-y-2 bg-slate-100 min-w-36 shadow-navbarDropdown z-[1] flex flex-col rounded-lg overflow-hidden duration-500 ${dropdownOpen ? 'block' : 'hidden'}`}>
                                <Link className='py-2 px-3 text-lg hover:bg-courseFeeBorder duration-150' href="#">Link</Link>
                                <Link className='py-2 px-3 text-lg hover:bg-courseFeeBorder duration-150' href="#">Link</Link>
                            </div>
                        </div>

                        <Link
                            className="flex items-center gap-x-1.5"
                            href={"#"}
                        >
                            Study Service{" "}
                            <span>
                                <FaAngleDown className="text-xs" />
                            </span>
                        </Link>
                        <Link
                            className="flex items-center gap-x-1.5"
                            href={"#"}
                        >
                            Scholarship{" "}
                            <span>
                                <FaAngleDown className="text-xs" />
                            </span>
                        </Link>
                        <Link href={"#"}>Events</Link>
                        <Link href={"#"}>Appointment</Link>
                        <Link href={"#"}>About</Link>
                    </div>

                    <div className="flex w-1/5 gap-x-2 justify-end">
                        <span className=" bg-secondaryYellow2 flex items-center justify-center rounded-full w-12 h-12">
                            <IoCallOutline className="text-xl text-primaryGreen1" />
                        </span>
                        <div>
                            <span className="block text-Ash1">
                                Hotline 24/7
                            </span>
                            <span className="block text-Black">+8801712345678</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

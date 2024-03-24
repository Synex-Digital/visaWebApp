'use client';
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import MyImage from '../core/MyImage';
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname();

    return (
        <footer className={`${pathName === '/form' ? 'hidden' : 'block'}`}>
            <div className="max-w-container mx-auto px-2">
                <div className="flex justify-between border-b-2 border-primary pb-20">
                    <div className="text-primary w-[20%]">
                        <MyImage source='/assets/Logos/footerLogo.png' alt='footerLogo.png' className='w-28' />
                        <p className="text-[22px] mt-4 mb-3 text-primaryGreen1">
                            Let’s get social
                        </p>
                        <div className="flex text-3xl gap-x-3 text-primaryGreen2">
                            <span>
                                <FaFacebookSquare />
                            </span>
                            <span>
                                <FaXTwitter />
                            </span>
                            <span>
                                <FaLinkedin />
                            </span>
                            <span>
                                <FaPinterestP />
                            </span>
                        </div>
                    </div>
                    <div className="w-[20%]">
                        <h6 className="mb-5 text-primaryGreen1 text-[22px] font-medium">
                            Our Services
                        </h6>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Education Counselling
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Application Process
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Visa Documentation
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Guidance Scholarship
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Visa Skills Personality Test
                        </Link>
                    </div>
                    <div className="w-[20%]">
                        <h6 className="mb-5 text-primaryGreen1 text-[22px] font-medium">
                            Study Destinations{" "}
                        </h6>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in Australia
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in Canada
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in Ireland
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in New Zealand
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in UK
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Study in USA
                        </Link>
                    </div>
                    <div className="w-[20%]">
                        <h6 className="mb-5 text-[22px] font-medium text-primaryGreen1">
                            Quick Links
                        </h6>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Innovation Hub
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Events
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Visit our virtaul office
                        </Link>
                        <Link href={""} className="mb-3 block text-primaryGreen2shade1">
                            Book an appointment
                        </Link>
                    </div>
                </div>
                <div>
                    <h6 className="text-center my-10 text-primaryGreen1shade2">
                        Australia | Bangladesh | India | Malaysia | Nepal |
                        Canada | Ireland | UK | USA | Thailand | Vietnam{" "}
                    </h6>
                </div>
            </div>
            <div className="py-1 bg-primaryGreen7 text-primaryGreen2 text-center flex items-center justify-center">
                <span>Copyright© 2024{" "}</span>
                <MyImage source='/assets/Logos/LogomarkPurple.png' alt='LogomarkPurple.png' className='w-33px mx-2.5' />
                <span className="text-xs text-primaryGreen1shade2">
                    Useful Links | Glossary | Terms of use | Privacy Policy
                </span>
            </div>
        </footer>
    );
};

export default Footer;

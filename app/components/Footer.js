import React from "react";
import { FaFacebookSquare, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import MyImage from '../core/MyImage';

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-2">
                <div className="flex justify-between border-b-2 border-primary pb-20">
                    <div className="text-primary w-[20%]">
                        <MyImage source='/assets/PrimaryLogoColor.png' alt='PrimaryLogoColor.png' className='w-20' />
                        <p className="text-[22px] mt-4 mb-3">
                            Let’s get social
                        </p>
                        <div className="flex text-3xl gap-x-3">
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
                        <h6 className="mb-5 text-primary text-[22px] font-medium">
                            Our Services
                        </h6>
                        <Link href={""} className="mb-3 block text-ptag">
                            Education Counselling
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Application Process
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Visa Documentation
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Guidance Scholarship
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Visa Skills Personality Test
                        </Link>
                    </div>
                    <div className="w-[20%]">
                        <h6 className="mb-5 text-primary text-[22px] font-medium">
                            Study Destinations{" "}
                        </h6>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in Australia
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in Canada
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in Ireland
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in New Zealand
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in UK
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Study in USA
                        </Link>
                    </div>
                    <div className="w-[20%]">
                        <h6 className="mb-5 text-[22px] font-medium text-primary">
                            Quick Links
                        </h6>
                        <Link href={""} className="mb-3 block text-ptag">
                            Innovation Hub
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Events
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Visit our virtaul office
                        </Link>
                        <Link href={""} className="mb-3 block text-ptag">
                            Book an appointment
                        </Link>
                    </div>
                </div>
                <div>
                    <h6 className="text-center my-10 text-primary">
                        Australia | Bangladesh | India | Malaysia | Nepal |
                        Canada | Ireland | UK | USA | Thailand | Vietnam{" "}
                    </h6>
                </div>
            </div>
            <div className="py-3 bg-[#D9D9D9] text-primary text-center">
                Copyright© 2024{" "}
                <span className="text-xs">
                    Useful Links | Glossary | Terms of use | Privacy Policy
                </span>
            </div>
        </footer>
    );
};

export default Footer;

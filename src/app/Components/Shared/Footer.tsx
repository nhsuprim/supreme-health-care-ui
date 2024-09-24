import Image from "next/image";
import Link from "next/link";
import fbIcon from "@/assets/landing_page/facebook.png";
import insta from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";
import linkdin from "@/assets/landing_page/linkedin.png";

import { Container } from "@mui/material";

const Footer = () => {
    return (
        <div className="bg-[#111828] py-6 text-white ">
            <Container className="space-y-8 pt-3">
                <div className="flex justify-center gap-4 ">
                    <Link
                        href="#"
                        className="text-white hover:text-gray-400 hover:scale-105 transition-transform duration-200"
                    >
                        Consultation
                    </Link>
                    <Link
                        href="#"
                        className="text-white hover:text-gray-400 hover:scale-105 transition-transform duration-200"
                    >
                        Health Plans
                    </Link>
                    <Link
                        href="#"
                        className="text-white hover:text-gray-400 hover:scale-105 transition-transform duration-200"
                    >
                        Diagnostics
                    </Link>
                    <Link
                        href="#"
                        className="text-white hover:text-gray-400 hover:scale-105 transition-transform duration-200"
                    >
                        Medicine
                    </Link>
                    <Link
                        href="#"
                        className="text-white hover:text-gray-400 hover:scale-105 transition-transform duration-200"
                    >
                        NGOs
                    </Link>
                </div>
                <div className="flex gap-4 justify-center ">
                    <Link href="#">
                        <Image
                            src={fbIcon}
                            alt="Facebook"
                            width={30}
                            height={30}
                            className="hover:scale-125 transition-transform duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={insta}
                            alt="Instagram"
                            width={30}
                            height={30}
                            className="hover:scale-125 transition-transform duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={twitter}
                            alt="Twitter"
                            width={30}
                            height={30}
                            className="hover:scale-125 transition-transform duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={linkdin}
                            alt="LinkedIn"
                            width={30}
                            height={30}
                            className="hover:scale-125 transition-transform duration-200"
                        />
                    </Link>
                </div>
                <div className=" border-b-[1px] border-dashed"></div>
                <div className="flex justify-between ">
                    <div className="flex justify-center text-sm">
                        &copy; {new Date().getFullYear()} Supreme Health Care.
                        All rights reserved.
                    </div>
                    <Link href="/" className="text-2xl font-bold text-white">
                        Supreme <span className="text-blue-400">Health </span>
                        Care
                    </Link>
                    <p>Privacy Policy ! Terms & Condition</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

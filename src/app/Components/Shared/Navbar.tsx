"use client";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "./Head";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { getUserInfo, removeUserInfo } from "@/Server/auth.service";

const Navbar = () => {
    const [user, setUser] = useState<{ email?: string } | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showHead, setShowHead] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();
    let lastScrollTop = 0;

    // Fetch user info on client-side
    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await getUserInfo();
            setUser(userInfo);
        };
        fetchUserInfo();
    }, []);

    const handleLogout = () => {
        removeUserInfo();
        setUser(null);
    };

    console.log(user);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > window.innerHeight) {
                setScrolled(true);

                if (currentScroll > lastScrollTop) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setScrolled(false);
                setShowHead(currentScroll === 0);
                setIsVisible(true);
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="pb-24">
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out ${
                    scrolled ? "shadow-md" : ""
                } ${isVisible ? "translate-y-0" : "-translate-y-full"} `}
            >
                <div
                    className={`transition-all duration-500 ease-in-out ${
                        showHead
                            ? "max-h-[200px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    {showHead && <Head />}
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-gray-800"
                            >
                                Supreme{" "}
                                <span className="text-blue-400">Health </span>
                                Care
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        href="/"
                                        className={`relative text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 hover:text-blue-400 ${
                                            pathname === "/"
                                                ? "text-blue-500"
                                                : "group"
                                        }`}
                                    >
                                        Consultation
                                        <span
                                            className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                                pathname === "/"
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                    <Link
                                        href="/services"
                                        className={`relative text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 hover:text-blue-400 ${
                                            pathname === "/services"
                                                ? "text-blue-500"
                                                : "group"
                                        }`}
                                    >
                                        Health Plans
                                        <span
                                            className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                                pathname === "/services"
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                    <Link
                                        href="/medicine"
                                        className={`relative text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 hover:text-blue-400 ${
                                            pathname === "/medicine"
                                                ? "text-blue-500"
                                                : "group"
                                        }`}
                                    >
                                        Medicine
                                        <span
                                            className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                                pathname === "/medicine"
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                    <Link
                                        href="/diagnostics"
                                        className={`relative text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 hover:text-blue-400 ${
                                            pathname === "/diagnostics"
                                                ? "text-blue-500"
                                                : "group"
                                        }`}
                                    >
                                        Diagnostics
                                        <span
                                            className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                                pathname === "/diagnostics"
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                    <Link
                                        href="/ngos"
                                        className={`relative text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200 hover:text-blue-400 ${
                                            pathname === "/ngos"
                                                ? "text-blue-500"
                                                : "group"
                                        }`}
                                    >
                                        NGOs
                                        <span
                                            className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                                pathname === "/ngos"
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        ></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white"
                                >
                                    {isOpen ? (
                                        <FaTimes className="h-6 w-6" />
                                    ) : (
                                        <FaBars className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            {user?.email ? (
                                <Button onClick={handleLogout}>LOGOUT</Button>
                            ) : (
                                <Link href="/login">
                                    <Button>LOGIN</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className={`relative text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    pathname === "/" ? "text-blue-500" : "group"
                                }`}
                            >
                                Consultation
                                <span
                                    className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                        pathname === "/"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                            <Link
                                href="/services"
                                className={`relative text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    pathname === "/services"
                                        ? "text-blue-500"
                                        : "group"
                                }`}
                            >
                                Health Plans
                                <span
                                    className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                        pathname === "/services"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                            <Link
                                href="/medicine"
                                className={`relative text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    pathname === "/medicine"
                                        ? "text-blue-500"
                                        : "group"
                                }`}
                            >
                                Medicine
                                <span
                                    className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                        pathname === "/medicine"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                            <Link
                                href="/diagnostics"
                                className={`relative text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    pathname === "/diagnostics"
                                        ? "text-blue-500"
                                        : "group"
                                }`}
                            >
                                Diagnostics
                                <span
                                    className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                        pathname === "/diagnostics"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                            <Link
                                href="/ngos"
                                className={`relative text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                                    pathname === "/ngos"
                                        ? "text-blue-500"
                                        : "group"
                                }`}
                            >
                                NGOs
                                <span
                                    className={`absolute left-0 bottom-0 block h-[1px] bg-blue-500 transition-all duration-300 ${
                                        pathname === "/ngos"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                        </div>
                        <div className=" px-2">
                            {user?.email ? (
                                <Button onClick={handleLogout}>LOGOUT</Button>
                            ) : (
                                <Link href="/login">
                                    <Button>LOGIN</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import image from "@/assets/how-it-works-img.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="space-y-3 ">
                <h1 className="text-blue-500 font-semibold text-lg">
                    How It Works
                </h1>
                <h1 className="text-3xl font-semibold">
                    4 Easy Steps To Get Your Solution
                </h1>
                <div className="text-gray-700">
                    <p>
                        Access to expert physicians and surgeons, advanced
                        technologies
                    </p>
                    <p>and top-quality surgery facilities right here.</p>
                </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:space-x-6">
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image src={image} alt="" width={500} />
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                    <div className="border border-gray-200 rounded-lg p-6 w-[280px] space-y-2 ">
                        <Image src={searchIcon} alt="Search Doctor Icon" />
                        <h1 className="font-medium">Search Doctor</h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 w-[280px] space-y-2 ">
                        <Image
                            src={doctorIcon}
                            alt="Check Doctor Profile Icon"
                        />
                        <h1 className="font-medium">Check Doctor Profile</h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 w-[280px] space-y-2 ">
                        <Image
                            src={appointmentIcon}
                            alt="Schedule Appointment Icon"
                        />
                        <h1 className="font-medium">Schedule Appointment</h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 w-[280px] space-y-2 ">
                        <Image src={charityIcon} alt="Get Your Solution Icon" />
                        <h1 className="font-medium">Get Your Solution</h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #224AE9, #15E9E9)",
                }}
                className="mt-8 flex flex-col md:flex-row justify-between text-white px-6 py-10 rounded-2xl space-y-6 md:space-y-0"
            >
                <div className="text-center">
                    <h1 className="text-5xl">180+</h1>
                    <h1 className="text-2xl">Expert Doctors</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl">26+</h1>
                    <h1 className="text-2xl">Expert Services</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl">10K+</h1>
                    <h1 className="text-2xl">Happy Patients</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl">150+</h1>
                    <h1 className="text-2xl">Best Award Winners</h1>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

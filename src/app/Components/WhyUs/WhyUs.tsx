import React from "react";
import image from "@/assets/choose-us.png";
import icon from "@/assets/svgs/award-icon.svg";
import icon2 from "@/assets/svgs/care-icon.svg";
import icon3 from "@/assets/svgs/medical-equipment-icon.svg";
import icon4 from "@/assets/svgs/call-icon.svg";
import Image from "next/image";

const WhyUs = () => {
    return (
        <div className="container mt-16 py-16">
            <h1 className="text-3xl text-blue-500 font-semibold text-center">
                Why Choose Us
            </h1>
            <div className="pt-10 sm:inline-block md:flex justify-center gap-14 ">
                <div className="md:w-1/2 space-y-3">
                    <div
                        style={{ borderRadius: "10px 10px 100px 10px" }}
                        className="flex items-center px-4 py-4  gap-4 bg-gray-100 "
                    >
                        <Image
                            className="bg-white p-3 w-[80px]"
                            src={icon}
                            alt=""
                        />
                        <div>
                            <h1 className="text-2xl font-semibold pb-2">
                                Award Winning Service
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est ad dolores recusandae
                                pariatur asperiores!
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ borderRadius: "10px 100px 10px 10px" }}
                        className="flex items-center  px-4 py-4 gap-4 bg-gray-100 "
                    >
                        <Image
                            className="bg-white p-3 w-[80px]"
                            src={icon2}
                            alt=""
                        />
                        <div>
                            <h1 className="text-2xl pb-2 font-semibold">
                                Best Quality Pregnency Care
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est ad dolores recusandae
                                pariatur asperiores!
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ borderRadius: "10px 10px 100px 10px" }}
                        className="flex items-center  px-4 py-4 gap-4 bg-gray-100 "
                    >
                        <Image
                            className="bg-white p-3 w-[80px]"
                            src={icon3}
                            alt=""
                        />
                        <div>
                            <h1 className="text-2xl pb-2 font-semibold">
                                Complete Medical Equipment
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est ad dolores recusandae
                                pariatur asperiores!
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ borderRadius: "10px 100px 10px 10px" }}
                        className="flex items-center p-4 py-4 gap-4 bg-gray-100 "
                    >
                        <Image
                            className="bg-white p-3 w-[80px]"
                            src={icon4}
                            alt=""
                        />
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Dedicated Emaergency Care
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est ad dolores recusandae
                                pariatur asperiores!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[410px]">
                    <Image src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;

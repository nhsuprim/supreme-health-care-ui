"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import doctor from "@/assets/doctor-review.png";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { ModifyPayload } from "@/utils/ModiffyPayload";
import { PatientRegester } from "@/Server/Actions/PatientRegister";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/Server/Actions/Login";
import { storeUserInfo } from "@/Server/auth.service";
import { InputField } from "../Components/Forms/InputText";
import { HookForm } from "../Components/Forms/hookForm";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const patientValidationSchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    contactNumber: z
        .string()
        .regex(/^\d{11}$/, "Please enter a valid contact number"),
    address: z.string().min(1, "Please enter a valid address"),
});

export const validationSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    patient: patientValidationSchema,
});

const defaultValues = {
    patient: {
        name: "",
        email: "",
        contactNumber: "",
        address: "",
    },
    password: "",
};

const page = () => {
    const router = useRouter();
    const onSubmit = async (values: FieldValues) => {
        const data = ModifyPayload(values);
        // console.log(data);
        try {
            const res = await PatientRegester(data);
            if (res?.success) {
            }
            const result = await userLogin({
                password: values.password,
                email: values.patient.email,
            });
            if (result?.data?.accessToken) {
                const token = result?.data?.accessToken;
                storeUserInfo({ accessToken: token });
                toast.success(res.message);
                router.push("/dashboard");
            }
        } catch (error) {
            console.error("Error registering patient", error);
        }
    };
    return (
        <div className="container">
            <div className="flex  md:w-full justify-center items-center min-h-screen gap-10">
                <div className="w-1/2 shadow-lg p-4 sm:p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-center">
                        Welcome To
                    </h2>
                    <h1 className="text-center text-4xl font-bold mb-4">
                        Supreme <span className="text-[#1E99E5]">Health</span>{" "}
                        Care
                    </h1>
                    <h1 className="text-xl font-semibold text-center">
                        Patient Register
                    </h1>
                    <HookForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(validationSchema)}
                        defaultValues={defaultValues}
                    >
                        <div className="mt-5 space-y-4">
                            <InputField
                                label="Name"
                                fullWidth
                                size="small"
                                name="patient.name"
                            />
                            <div className="space-y-4 md:flex md:space-y-0 md:gap-4">
                                <InputField
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    size="small"
                                    name="patient.email"
                                />
                                <InputField
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    size="small"
                                    name="password"
                                />
                            </div>
                            <div className="space-y-4 md:flex md:space-y-0 md:gap-4">
                                <InputField
                                    label="Contact Number"
                                    type="number"
                                    fullWidth
                                    size="small"
                                    name="patient.contactNumber"
                                />
                                <InputField
                                    label="Address"
                                    fullWidth
                                    size="small"
                                    name="patient.address"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                            <p className="text-gray-600 text-center">
                                Do you already have an account?{" "}
                                <Link className="text-blue-500" href="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </HookForm>
                </div>
                <div className="w-1/2 hidden md:inline-block">
                    <Image src={doctor} alt="Doctor Image" />
                </div>
            </div>
        </div>
    );
};

export default page;

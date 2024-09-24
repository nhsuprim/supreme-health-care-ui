"use client";
import {
    Box,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/svgs/logo.svg";
import doctor from "@/assets/doctor-review.png";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/Server/Actions/Login";
import { toast } from "sonner";
import { storeUserInfo } from "@/Server/auth.service";
import { HookForm } from "../Components/Forms/hookForm";
import { InputField } from "../Components/Forms/InputText";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface ILoginData {
    email: string;
    password: string;
}

export const validationSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(4, "Password must be at least 4 characters"),
});

const page = () => {
    const router = useRouter();
    const onSubmit = async (values: FieldValues) => {
        try {
            const res = await userLogin(values);
            if (res?.data?.accessToken) {
                const token = res?.data?.accessToken;
                storeUserInfo({ accessToken: token });
                toast.success(res.message);

                router.push("/dashboard");
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row-reverse w-full justify-center items-center min-h-screen gap-10">
                <div className="shadow-lg p-4 sm:p-6 md:p-8 w-full md:w-1/2 lg:w-1/3">
                    <div className="flex flex-col items-center">
                        <Image
                            className="pb-4"
                            src={logo}
                            alt="Supreme Health Care"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-center text-4xl font-bold mb-4">
                            Supreme{" "}
                            <span className="text-[#1E99E5]">Health</span> Care
                        </h1>
                        <h1 className="text-xl font-semibold text-center">
                            Log in
                        </h1>
                    </div>
                    <HookForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(validationSchema)}
                        defaultValues={{
                            email: "",
                            password: "",
                        }}
                    >
                        <div className="mt-5 space-y-4">
                            <InputField
                                name="email"
                                type="email"
                                label="Email"
                                fullWidth
                                size="small"
                            />
                            <InputField
                                name="password"
                                type="password"
                                label="Password"
                                fullWidth
                                size="small"
                            />
                            <p className="text-blue-500 text-end">
                                <Link href="">Forgot Password?</Link>
                            </p>

                            <Button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                Log in
                            </Button>
                            <p className="text-gray-600 text-center">
                                Don't have any account?{" "}
                                <Link
                                    className="text-blue-500"
                                    href="/register"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </HookForm>
                </div>
                <div className="w-full md:w-1/2 hidden md:inline-block">
                    <Image
                        src={doctor}
                        alt="Doctor Image"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

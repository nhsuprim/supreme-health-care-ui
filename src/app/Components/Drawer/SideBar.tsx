"use client";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../assets/svgs/logo.svg";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/Server/auth.service";
import { useEffect, useState } from "react";
import Link from "next/link";

const SideBar = () => {
    const [userRole, SetUserRole] = useState("");
    useEffect(() => {
        const { role } = getUserInfo() as any;
        SetUserRole(role);
    }, []);
    return (
        <Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
                sx={{
                    py: 1,
                    mt: 1,
                }}
            >
                <Image src={logo} alt=""></Image>
                <Link href="/">
                    <Typography>Supreme Health Care</Typography>
                </Link>
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                    <SidebarItems item={item} index={index} />
                ))}
            </List>
        </Box>
    );
};

export default SideBar;

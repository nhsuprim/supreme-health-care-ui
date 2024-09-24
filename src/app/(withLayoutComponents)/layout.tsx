import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Box } from "@mui/material";
import Footer from "../Components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const componentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <ToastContainer />
            <Box className="min-h-screen">{children}</Box>
            <Footer />
        </>
    );
};

export default componentLayout;

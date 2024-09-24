import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Head = () => {
    return (
        <div className="hidden md:flex justify-between  transition-all duration-500 bg-blue-100 py-1">
            <p>01638744151</p>
            <div className="inline-flex gap-3">
                <FaFacebook />
                <FaYoutube />
            </div>
        </div>
    );
};

export default Head;

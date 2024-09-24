import DrawerLayout from "@/app/Components/Drawer/Drawer";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <DrawerLayout>{children}</DrawerLayout>
        </div>
    );
};

export default Dashboardlayout;

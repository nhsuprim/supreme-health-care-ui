import { drawerItem } from "@/types";

import Link from "next/link";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";

type IProps = {
    item: drawerItem;
    index: number;
};

const SidebarItems = ({ item, index }: IProps) => {
    const linkPath = `/dashboard/${item.path}`;
    const pathName = usePathname();
    return (
        <Link href={linkPath}>
            <ListItem
                key={index}
                disablePadding
                sx={{
                    ...(pathName === linkPath
                        ? {
                              borderRight: "3px solid #1586FD",
                              "& svg": { color: "#1586FD" },
                          }
                        : {}),
                }}
            >
                <ListItemButton>
                    <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

export default SidebarItems;

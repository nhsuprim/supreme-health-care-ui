import { authKey } from "@/constants/auhKey";
import { decodetoken } from "@/utils/jwt";
import {
    getFromLocalStorage,
    removeFromLocalStorage,
    setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
    const token = getFromLocalStorage(authKey);
    if (token) {
        const decodedToken: any = decodetoken(token);
        return {
            ...decodedToken,
            role: decodedToken?.role?.toLowerCase(),
        };
    } else {
        return "";
    }
};

export const isLoggedIn = () => {
    const token = getFromLocalStorage(authKey);
    if (token) {
        return !!token;
    }
};

export const removeUserInfo = () => {
    return removeFromLocalStorage(authKey);
};

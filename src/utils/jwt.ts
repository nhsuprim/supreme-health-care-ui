import { jwtDecode } from "jwt-decode";

export const decodetoken = (token: any) => {
    return jwtDecode(token);
};

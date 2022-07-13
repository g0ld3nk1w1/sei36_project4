import {createContext}  from "react";

export const UserContext = createContext("role");

export enum ROLE {
    CONSUMER = "CONSUMER",
    ADMIN = "ADMIN",
    INSTRUCTOR = "INSTRUCTOR"
}
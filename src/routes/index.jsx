import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes } from "./AppRoutes";


export function Route(){
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}
import React from "react";
import { LayoutApp } from "../layout/Layout";
import { Home } from "../components/Home";

export const HomeScene: React.FC = () => {

    return( 
        <LayoutApp >
            <Home  />
        </LayoutApp> 
    )
}
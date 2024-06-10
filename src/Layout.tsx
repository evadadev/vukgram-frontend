import React from "react";
import { Header } from "./components/Header";


interface Props {
    children: React.ReactNode
}

export const LayoutApp: React.FC<Props> = (props) => {
    const { children } = props;
    
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
        
    )
}
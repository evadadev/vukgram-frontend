import React from "react";
import { SideBarContainer } from "../components/SideBar.container";
import { Header } from "../components/Header";


interface Props {
    children: React.ReactNode
}

export const LayoutApp: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <div className="flex flex-row h-screen w-screen bg-amber-50">
            <SideBarContainer />          
            <Header/>
            <main>{children}</main>
        </div>
    )
}
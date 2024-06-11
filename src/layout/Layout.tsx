import React from "react";
import { SideBarContainer } from "../components/SideBar.container";
import { Header } from "../components/Header";


interface Props {
    children: React.ReactNode
}

export const LayoutApp: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <div className="flex flex-row h-screen w-screen bg-complementary">
            <SideBarContainer />          
            <div className="flex flex-col w-screen px-9">
                <Header/>
                <div className="flex flex-row w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
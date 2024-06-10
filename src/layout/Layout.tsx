import React from "react";
import { Header } from "../pops/Header";
import { SideBar } from "../pops/SideBar";


interface Props {
    children: React.ReactNode
}

export const LayoutApp: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <div>
            <section>
                <SideBar />
            </section>
            <section>
                <Header/>
                <main>{children}</main>
            </section>
        </div>
    )
}
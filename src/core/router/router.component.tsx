import React from "react";
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { HomeScene } from "../../scenes/index"

export const RouterComponentes: React.FC = () => {

    return(
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<HomeScene/>} />
            </Routes>
        </Router>
    )
}
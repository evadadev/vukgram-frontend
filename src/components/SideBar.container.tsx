import React from "react";
import { faBookmark, faClock, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logotipo from "../assets/images/logotipo.jpg";
import { FlagLanguage } from "./FlagLangage";


export const SideBarContainer: React.FC = () => {

    return (
        <>
        <div className="flex flex-col w-28 h-full bg-complementary">
            <div className="flex flex-col w-16 h-16 m-5">
                <img className="rounded-full" src={logotipo} alt="logotipo"></img>
            </div>
            <div className="flex flex-col justify-center gap-8 h-full text-primary">
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faClock} />
                <FontAwesomeIcon icon={faGear} />
            </div>
            <FlagLanguage />
        </div>
        <hr className="w-0.5 h-full bg-secundary"/>
        </>
    )
}
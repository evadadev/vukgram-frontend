import React from "react";
import { faBookmark, faClock, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logotipo from "../assets/images/logotipo.jpg"

export const SideBarContainer: React.FC = () => {

    return (
        <>
        <div className="flex flex-col w-28 h-full bg-amber-50">
            <div className="flex flex-col w-16 h-16 m-5">
                <img className="rounded-full" src={logotipo} alt="logotipo"></img>
            </div>
            <div className="flex flex-col justify-around h-full m-11 text-rose-300">
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faClock} />
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
        <hr className="flex h-96 w-0.5 mt-40 bg-rose-300"/>
        </>
    )
}
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className="flex flex-row content-center justify-around w-full h-28 m-5 ">
            <div className=" flex mr-96 gap-2 text-rose-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} className=" mt-4"/>
                <input type="text" placeholder={t('hola')} className="h-11 border-0 outline-none border-b-2 bg-amber-50"/>
            </div>
            <div className="flex flex-row gap-2 text-slate-500 mx-4 mt-4">
                <img src="user" alt="user" className="flex rounded-full w-9 h-9 bg-orange-100"/>
                <span>Nombre de Usuario</span>
            </div>
                
        </header>
    )
} 
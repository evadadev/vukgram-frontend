import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import logotipo from "@/src/assets/images/logotipo.jpg";


export const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className="flex flex-row justify-between w-full py-5">
            <div className=" flex items-center gap-2 text-primary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder={t('hola')} className="h-9 border-0 outline-none border-b bg-complementary"/>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
                <img src={logotipo} alt="logotipo" className="flex rounded-full w-9 h-9 bg-secundary"/>
                <span className="text-xs font-bold">Nombre de Usuario</span>
            </div>
        </header>
    )
} 
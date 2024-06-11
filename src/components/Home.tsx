import React from "react";
import { useTranslation } from "react-i18next";
import logotipo from "@/src/assets/images/logotipo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


export const Home: React.FC = () => {
    const { t } = useTranslation();

    return(
        <div className="grid grid-cols-3">
            <div className="col-span-2 italic">
                <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-primary">{t('homeH1')} {t('home2H1')}</h1>
                    <p>{t('bienvenida')}</p>
                    <button className="bg-secundary text-xs rounded-full w-28 p-2">{t('leer')}</button>
                </div>
                <div className="flex flex-col gap-2">
                <h2 className="text-base font-bold">{t('popular')}</h2>
                <div className="flex flex-row ">
                    <div className="flex flex-col w-48 h-60">
                        <img className="w-28 h-32 gap-5" src={logotipo} alt="logotipo" />
                        <p>name</p>
                    </div>
                    <div className="flex flex-col w-48 h-60">
                        <img className="w-28 h-32 gap-5" src={logotipo} alt="logotipo" />
                        <p>name</p>
                    </div>
                    <div className="flex flex-col w-48 h-60">
                        <img className="w-28 h-32 gap-5" src={logotipo} alt="logotipo" />
                        <p>name</p>
                    </div>
                    <div className="flex flex-col w-48 h-60">
                        <img className="w-28 h-32 gap-5" src={logotipo} alt="logotipo" />
                        <p>name</p>
                    </div>
                </div>
                </div>

                </div>
            </div>
            <div className="bg-secundary gap-11 rounded-md">
                <FontAwesomeIcon icon={faBookmark} className="flex text-primary h-11 w-7 mt-0 ml-64"/>
                <span className="text-3xl text-primary p-5 italic">Título libro</span>
                <p className="p-7">{t('bienvenida')}</p>
            </div>
        </div>
    )
}
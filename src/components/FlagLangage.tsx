import React, { useState } from "react";
import { ES, GB } from "country-flag-icons/react/1x1";
import i18n from "@/src/i18n"

export const FlagLanguage: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);

    const isSpanish = () => currentLanguage === 'es'
        

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    };

    const openFlag = (lang: string,) => { 
        changeLanguage(lang)
        setIsOpen(false)
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (      
                <div className="flex m-5 bg-secundary w-14 h-20 rounded-full shadow-lg">
                    <button className="flex ml-2 items-center text-slate-500" onClick={toggleMenu}>
                        {isSpanish() ? <ES className="w-4 h-4" /> : <GB className="w-4 h-4" />}
                        {isSpanish() ? 'ES' : 'EN'}
                    </button>
                    {isOpen && (
                    <div >
                        {!isSpanish() && (
                        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-800 hover:bg-gray-100" 
                            onClick={() => openFlag('es')}
                            disabled={isSpanish()}>
                        <ES className="w-4 h-4" />ES</button>
                        )}
                        {isSpanish() && (

                        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-800 hover:bg-gray-100" 
                        onClick={() => openFlag('en')} disabled={!isSpanish()}>
                        <GB className="w-4 h-4"/>EN</button>
                        )}
                    </div>    
                    )}
                    </div>
    )
}
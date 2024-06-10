import React from "react";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>{t('hola')}</div>
    )
}
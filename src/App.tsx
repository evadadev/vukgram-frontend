import { useTranslation } from "react-i18next"

export default function App() {
  const {t} = useTranslation()
  return (
    <h1 className="bg-slate-500">
      {t('hola')}
    </h1>
  )
}
import { useState } from "react";
import i18next from "i18next";
import { useConfigLang } from "../../shared/config/languageSwitcher.config";
import './languageSwitcher.css'

import { FaSortDown } from "react-icons/fa";

export const LanguageSwitcher: React.FC = () => {
  const [isActive, setActive] = useState(false);

  const config = useConfigLang();

  const currentLang = config.find((item) => item.code === i18next.language);
  const availbleLang = config.filter((item) => item.code !== i18next.language);

  if (!currentLang || availbleLang.length === 0) return null;

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setActive(false);
  }

  return (
    <div className="header__lang">

      <div className={`header__select ${isActive ? "header__select--open" : null}`} onClick={() => setActive((prev) => !prev)}>
        <FaSortDown className="sortdown" color="white"/>
        <img src={currentLang.flagLng} alt={currentLang.code} width={28} height={18}/>
      </div>

      <div className="menu">
        {availbleLang.map((item) => (
          <img key={item.id} src={item.flagLng} alt={item.code} width={28} height={18}
          onClick={() => changeLanguage(item.code)}/>
        ))}
      </div>

    </div>
  )
}
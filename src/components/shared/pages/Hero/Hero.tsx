import { FaGamepad } from 'react-icons/fa'
import { Button } from '../../../ui/Button/Button'
import { IoPlay } from "react-icons/io5";
import './Hero.css'
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="title">
          <span className="name" role="text" aria-label="NextGen Role Play">
            <p className="text-i" aria-hidden="true">NextGen Role Play</p>
            <p className="text-c" aria-hidden="true">NextGen Role Play</p>
            <p className="text-i" aria-hidden="true">NextGen Role Play</p>
          </span>
        </div>

        <div className="hero__description">
          <p>{t("hero.description")}</p>
        </div>

        <div className="hero__btn--container">
          <Button id="hero__btn--howtostart" path="#howtostart" children={t("button.howtostart")}
          icon={FaGamepad}/>
        </div>

      </div>
    </section>
  )
}
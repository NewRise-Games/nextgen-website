import { FaGamepad } from "react-icons/fa";
import "./Hero.css";
import { useTranslation } from "react-i18next";

interface Props {
  onHowToPlay: () => void;
}

export const Hero: React.FC<Props> = ({ onHowToPlay }) => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="title">
          <span className="name">
            <p className="text-i">NextGen Role Play</p>
            <p className="text-c">NextGen Role Play</p>
            <p className="text-i">NextGen Role Play</p>
          </span>
        </div>

        <div className="hero__description">
          <p>{t("hero.description")}</p>
        </div>

        <div className="hero__btn--container">
          <button
            id="hero__btn--howtostart"
            className="hero__btn"
            onClick={onHowToPlay}
          >
            <FaGamepad />
            {t("button.howtostart")}
          </button>
        </div>
      </div>
    </section>
  );
};
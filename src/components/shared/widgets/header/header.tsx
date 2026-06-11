import { LanguageSwitcher, Navigation } from '../../../ui'
import type { Props } from '../../@types/props'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import './header.css'
import { Button } from '../../../ui/Button/Button';
import { FaGamepad } from "react-icons/fa6";
import { PiUsersFourBold } from "react-icons/pi";
import Logo from '../../../../assets/image/logo.png'

export const Header: React.FC<Props> = ({ onClick, isActive }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__content">
          <div className="header__left">
            <a href="/"><img src={Logo} alt="Logo" width={60} height={60}/></a>
            <LanguageSwitcher/>
          </div>

          <div className="header__menu"><Navigation/></div>

          <div className="header__button--container">
            <Button className="header--button button--mnt" path="/#monitoring" children="Monitoring" icon={PiUsersFourBold}/>
            <Button className="header--button button--howtostart" path="/#howtostart" children="How to start playing?" icon={FaGamepad}/>
          </div>

          <button className="header__button--hamburger" onClick={onClick}>
            {!isActive ? <GiHamburgerMenu size={40} color="white"/> : <RxCross2 size={40} color="white"/>}
          </button>
        </div>

      </div>
    </header>
  )
}
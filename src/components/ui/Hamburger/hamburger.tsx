import type { Props } from '../../shared/@types/props'
import { Navigation } from '../Navigation/navigation'
import './hamburger.css'

export const Hamburger: React.FC<Props> = ({ isActive }) => {
  return (
    <div className={`hamburger__menu--mobile${isActive ? "--open" : ""}`}>
      <div className="hamburger__navigation">
        {isActive && <Navigation/>}
      </div>
    </div>
  )
}
import { NavLink } from 'react-router-dom';
import { useNavigationConfig } from '../../shared/config/navigation.config'
import './navigation.css'

export const Navigation: React.FC = () => {
  const useconfig = useNavigationConfig();

  return (
    <ul>
      {useconfig.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}
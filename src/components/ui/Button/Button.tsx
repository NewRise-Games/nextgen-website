import type { ButtonProps } from "../../shared/@types/button";
import './Button.css'
import { cn } from "../../shared/lib/utils";
import { HashLink } from 'react-router-hash-link'

export const Button: React.FC<ButtonProps> = ({
  children,
  path,
  id,
  icon: Icon,
  className
}) => {
  return (
    <HashLink
      id={id}
      className={cn('btn-', className)}
      smooth
      to={path ?? "/"}
    >
      {Icon && <Icon />}
      {children}
    </HashLink>
  );
}
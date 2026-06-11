import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface ButtonProps {
  id?: string;
  path?: string;
  icon?: IconType;
  children?: ReactNode;
  className?: string;
}
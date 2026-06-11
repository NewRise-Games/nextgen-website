import { useTranslation } from "react-i18next";

interface Props {
  id: number;
  label: string;
  path?: string;
}

export const useNavigationConfig = (): Props[] => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      label: t("navigation.forum"),
      path: "http://localhost:5173/"
    },
    {
      id: 2,
      label: t("navigation.donate"),
      path: "#donate"
    },
    {
      id: 3,
      label: t("navigation.about"),
      path: "#about"
    }
  ]
}
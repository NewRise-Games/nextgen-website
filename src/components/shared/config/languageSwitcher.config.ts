import en from '../../../assets/flags/Flag_of_the_United_States.svg.png'
import ua from '../../../assets/flags/Flag_of_Ukraine.svg.webp'
import ru from '../../../assets/flags/Flag_of_Russia.svg.webp'

interface Props {
  id: number;
  code: string;
  flagLng: string;
}

export const useConfigLang = (): Props[] => {
  return [
    {
      id: 1,
      code: "en",
      flagLng: en
    },
    {
      id: 2,
      code: "ua",
      flagLng: ua
    },
    {
      id: 3,
      code: "ru",
      flagLng: ru
    }
  ]
}
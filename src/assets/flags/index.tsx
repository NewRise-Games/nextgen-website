import usaFlag from './Flag_of_the_United_States.svg.png';
import ruFlag from './Flag_of_Russia.svg.webp';
import uaFlag from './Flag_of_Ukraine.svg.webp';

interface FlagProps {
  width?: number;
  height?: number;
  className?: string;
}

type FlagList = {
  [key in 'usa' | 'ru' | 'ua']: React.FC<FlagProps>;
};

export const Flags: FlagList = {
  usa: ({ width = 28, height = 28, className }) => (
    <img
      src={usaFlag}
      alt="USA Flag"
      width={width}
      height={height}
      className={className}/>
  ),
  ru: ({ width = 28, height = 28, className }) => (
    <img
      src={ruFlag}
      alt="Russia Flag"
      width={width}
      height={height}
      className={className}/>
  ),
  ua: ({ width = 28, height = 28, className }) => (
    <img
      src={uaFlag}
      alt="Ukraine Flag"
      width={width}
      height={height}
      className={className}/>
  ),
};
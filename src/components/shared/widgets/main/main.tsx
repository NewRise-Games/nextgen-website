import { Hero, Monitoring } from "../../pages";

interface Props {
  onHowToPlay: () => void;
}

export const Main: React.FC<Props> = ({ onHowToPlay }) => {
  return (
    <main>
      <Hero onHowToPlay={onHowToPlay} />
      <Monitoring />
    </main>
  );
};
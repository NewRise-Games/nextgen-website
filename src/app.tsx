import { useState } from "react";
import { Footer, Header, Main } from "./components/shared/widgets"
import { Hamburger } from "./components/ui";

export const App: React.FC = () => {
  const [ isHamburger, setIsHamburgerOpen ] = useState(false);

  return (
    <>
    <Header isActive={isHamburger} onClick={() => setIsHamburgerOpen((prev) => !prev)}/>
    <Hamburger isActive={isHamburger}/>
    <Main/>
    <Footer/>
    </>
  )
}
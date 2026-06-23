import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Footer, Header, Main } from "./components/shared/widgets";
import { Hamburger } from "./components/ui";
import { Donate } from "./components/shared/pages";

export const App: React.FC = () => {
  const [isHamburger, setIsHamburgerOpen] = useState(false);

  return (
    <>
      <Header
        isActive={isHamburger}
        onClick={() => setIsHamburgerOpen((prev) => !prev)}
      />

      <Hamburger isActive={isHamburger} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </>
  );
};
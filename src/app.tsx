import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Footer, Header, Main } from "./components/shared/widgets";
import {
  Hamburger,
  HowToPlayModal
} from "./components/ui";

import {
  Donate,
  About
} from "./components/shared/pages";

export const App: React.FC = () => {
  const [isHamburger, setIsHamburgerOpen] = useState(false);
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  return (
    <>
      <Header
        isActive={isHamburger}
        onClick={() => setIsHamburgerOpen((prev) => !prev)}
        onHowToPlay={() => setIsHowToPlayOpen(true)}
      />

      <Hamburger isActive={isHamburger} />

      {isHowToPlayOpen && (
        <HowToPlayModal
          onClose={() => setIsHowToPlayOpen(false)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onHowToPlay={() => setIsHowToPlayOpen(true)}
            />
          }
        />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};
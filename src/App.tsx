import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurDiets from "./scenes/ourDiets";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
import { useAppDispatch } from "./hooks";
import { setSelectedPage } from "./slices/selectedPage";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        dispatch(setSelectedPage(SelectedPage.Home));
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <Benefits />
      <OurDiets />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

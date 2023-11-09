import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import HomeLeftSide from "./HomeLeftSide";
import HomeSponsors from "./HomeSponsors";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className=" gap-16 bg-gray-20 py-10 md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <HomeLeftSide setSelectedPage={setSelectedPage} />
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pagegraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      <HomeSponsors />
    </section>
  );
};

export default Home;

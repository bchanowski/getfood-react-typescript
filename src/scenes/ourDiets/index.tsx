import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import DietsHeader from "./DietsHeader";
import DietsSlider from "./DietsSlider";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurDiets = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourdiets" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurDiets)}
      >
        <DietsHeader />
        <DietsSlider />
      </motion.div>
    </section>
  );
};

export default OurDiets;

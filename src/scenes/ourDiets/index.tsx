import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import DietsHeader from "./DietsHeader";
import DietsSlider from "./DietsSlider";
import { useAppDispatch } from "@/hooks";
import { setSelectedPage } from "@/slices/selectedPage";

const OurDiets = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="ourdiets" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(SelectedPage.OurDiets))}
      >
        <DietsHeader />
        <DietsSlider />
      </motion.div>
    </section>
  );
};

export default OurDiets;

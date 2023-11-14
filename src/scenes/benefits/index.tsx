import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsTopPage from "./BenefitsTopPage";
import BenefitsBottomPage from "./BenefitsBottomPage";
import { useAppDispatch } from "@/hooks";
import { setSelectedPage } from "@/slices/selectedPage";

const Benefits = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="benefits" className="mx-auto h-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(SelectedPage.Benefits))}
      >
        <BenefitsTopPage />
        <BenefitsBottomPage />
      </motion.div>
    </section>
  );
};

export default Benefits;

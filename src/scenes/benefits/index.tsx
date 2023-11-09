import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsTopPage from "./BenefitsTopPage";
import BenefitsBottomPage from "./BenefitsBottomPage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto h-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <BenefitsTopPage setSelectedPage={setSelectedPage} />
        <BenefitsBottomPage setSelectedPage={setSelectedPage} />
      </motion.div>
    </section>
  );
};

export default Benefits;

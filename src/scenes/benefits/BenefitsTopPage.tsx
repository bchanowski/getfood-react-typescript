import { motion } from "framer-motion";
import { benefits } from "./data";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import { SelectedPage } from "@/shared/types";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitsTopPage = ({ setSelectedPage }: Props) => {
  return (
    <>
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>UNIQUE FOOD EXPERIENCE</HText>
        <p className="my-5 text-sm">
          Aenean eget pulvinar odio, vitae suscipit sem. Integer blandit
          pellentesque porta. Morbi eu molestie ex, vitae gravida nibh. Etiam
          molestie mattis diam, euismod ultrices sem hendrerit ac.
        </p>
      </motion.div>

      <motion.div
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {benefits.map((benefit) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            desc={benefit.desc}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>
    </>
  );
};

export default BenefitsTopPage;

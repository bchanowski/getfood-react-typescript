import { motion } from "framer-motion";
import HText from "@/shared/HText";

const DietsHeader = () => {
  return (
    <>
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>OUR DIETS</HText>
          <p className="py-5">
            Nunc id tortor non sem efficitur viverra. Nunc at neque a libero
            lobortis pharetra. Morbi id libero nisi. Sed sapien est,
            sollicitudin eu eros quis, iaculis lacinia quam. Fusce aliquet augue
            vitae diam dapibus, ut convallis elit scelerisque.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default DietsHeader;

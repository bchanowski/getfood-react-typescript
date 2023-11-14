import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import BenefitsBottomText from "./BenefitsBottomText";

const BenefitsBottomPage = () => {
  return (
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      <img
        className="mx--auto"
        alt="benefits-page-graphics"
        src={BenefitsPageGraphic}
      />
      <div>
        <div className="relative">
          <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                THOUSANDS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </HText>
            </motion.div>
          </div>
        </div>
        <BenefitsBottomText />
        <div className="relative mt-16">
          <div className="w-2/6 before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton>Join Now</ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBottomPage;

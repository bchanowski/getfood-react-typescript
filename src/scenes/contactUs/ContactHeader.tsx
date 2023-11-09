import { motion } from "framer-motion";
import HText from "@/shared/HText";

const ContactHeader = () => {
  return (
    <>
      <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET HEALTHIER
        </HText>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          efficitur pulvinar lacus. Cras blandit, turpis et cursus tempor, diam
          dui euismod arcu, id tristique neque risus vel magna. Curabitur
          pretium erat eget risus mattis, nec rutrum ligula volutpat.
        </p>
      </motion.div>
    </>
  );
};

export default ContactHeader;

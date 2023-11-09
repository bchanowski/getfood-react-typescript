import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

const ContactImage = () => {
  return (
    <>
      <motion.div
        className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-full pb-2 before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
          <img
            className="w-full rounded-md"
            alt="contact-us-page-graphic"
            src={ContactUsPageGraphic}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ContactImage;

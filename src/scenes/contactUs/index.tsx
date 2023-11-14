import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";
import { useAppDispatch } from "../../hooks";
import { setSelectedPage } from "@/slices/selectedPage";

const ContactUs = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="contactus" className="pb-22 mx-auto w-5/6 pt-24 ">
      <motion.div
        onViewportEnter={() =>
          dispatch(setSelectedPage(SelectedPage.ContactUs))
        }
      >
        <ContactHeader />
        <div className="mt-10 justify-between gap-8 md:flex">
          <ContactForm />
          <ContactImage />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

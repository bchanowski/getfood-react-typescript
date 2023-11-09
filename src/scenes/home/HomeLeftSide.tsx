import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HomeLeftSide = ({ setSelectedPage }: Props) => {
  return (
    <div className="z-10 mt-32 md:basis-3/5">
      <motion.div
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="relative">
          <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
            <img alt="home-page-text" src={HomePageText} />
          </div>
        </div>
        <p className="mt-8 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui ut
          nunc porta congue. Suspendisse porta viverra neque, ac porta ex
          volutpat et.
        </p>
      </motion.div>
      <motion.div
        className="mt-8 flex items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        <a
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
            Learn More
          </p>
        </a>
      </motion.div>
    </div>
  );
};

export default HomeLeftSide;

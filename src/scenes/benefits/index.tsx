import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Made in Real Restaurant Kitchens",
    desc: "Cras tincidunt elit nec erat ultricies faucibus. Aliquam imperdiet massa neque, at vulputate quam porttitor et. Quisque porta arcu nec eros rhoncus porttitor.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Customers in Over 100 Cities Around The World",
    desc: "Cras tempor mauris id commodo volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Qualified and Educated Chefs",
    desc: " Praesent arcu purus, fringilla vitae eleifend at, dapibus et lorem. Morbi pretium, risus vel tincidunt laoreet, nisi metus rhoncus metus, ut ullamcorper turpis enim sed sapien.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
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
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Quisque tincidunt purus maximus ante hendrerit, ac mollis nibh
                molestie. Pellentesque tincidunt ipsum in nibh vehicula tempus.
                Nullam luctus purus magna, eu varius massa ullamcorper ac.
                Suspendisse nec nibh vitae turpis malesuada convallis. Morbi
                finibus urna quis aliquet pellentesque.
              </p>
              <p className="mb-5">
                Vestibulum lacinia, turpis vel posuere sodales, massa sapien
                vehicula tellus, quis vulputate nisi turpis et dolor. Duis at
                vehicula lacus. Fusce varius vestibulum urna, sed molestie odio
                commodo et. Mauris imperdiet auctor metus.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

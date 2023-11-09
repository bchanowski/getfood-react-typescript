import { motion } from "framer-motion";

const BenefitsBottomText = () => {
  return (
    <>
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
          molestie. Pellentesque tincidunt ipsum in nibh vehicula tempus. Nullam
          luctus purus magna, eu varius massa ullamcorper ac. Suspendisse nec
          nibh vitae turpis malesuada convallis. Morbi finibus urna quis aliquet
          pellentesque.
        </p>
        <p className="mb-5">
          Vestibulum lacinia, turpis vel posuere sodales, massa sapien vehicula
          tellus, quis vulputate nisi turpis et dolor. Duis at vehicula lacus.
          Fusce varius vestibulum urna, sed molestie odio commodo et. Mauris
          imperdiet auctor metus.
        </p>
      </motion.div>
    </>
  );
};

export default BenefitsBottomText;

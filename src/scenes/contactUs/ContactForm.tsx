import { motion } from "framer-motion";
import { customValidations } from "./validations";
import { useForm } from "react-hook-form";
import { TCustomHookType } from "@/shared/types";

const ContactForm = () => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<TCustomHookType>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <>
      <motion.div
        className="mt-10 basis-3/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/5381e3025941a6f15c46b893a231f5a5"
          method="POST"
        >
          <input
            className={inputStyles}
            type="text"
            placeholder="NAME"
            {...register("name", customValidations.name)}
          />
          {errors.name && (
            <p className="mt-1 text-primary-500">{errors.name.message}</p>
          )}
          <input
            className={inputStyles}
            type="text"
            placeholder="EMAIL"
            {...register("email", customValidations.email)}
          />
          {errors.email && (
            <p className="mt-1 text-primary-500">{errors.email.message}</p>
          )}
          <textarea
            className={inputStyles}
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", customValidations.message)}
          />
          {errors.message && (
            <p className="mt-1 text-primary-500">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
          >
            SUBMIT
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;

import { motion } from "framer-motion";

export default function Transition({ children }) {
  return (
    <div>
      <motion.div
        initial={{ y: -90, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

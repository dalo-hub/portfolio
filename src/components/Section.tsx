import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section__container">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </motion.section>
  );
}

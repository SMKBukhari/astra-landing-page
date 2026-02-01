import React from "react";
import { motion } from "framer-motion";

const PillBadge = ({
  text,
  color = "default",
  className = "",
}: {
  text: string;
  color?: string;
  className?: string;
}) => {
  // Define color variants for background and border
  const colorVariants = {
    default: {
      bg: "bg-[#1B1A19]",
      text: "text-white",
      border: "from-[#ffff] to-[#ffffff20]",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-100",
      border: "from-blue-400 to-blue-600",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-100",
      border: "from-green-400 to-green-600",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-100",
      border: "from-purple-400 to-purple-600",
    },
    red: {
      bg: "bg-red-500",
      text: "text-red-100",
      border: "from-red-400 to-red-600",
    },
    yellow: {
      bg: "bg-yellow-500",
      text: "text-yellow-100",
      border: "from-yellow-400 to-yellow-600",
    },
  };

  // Select the color variant or default to blue
  const variant =
    colorVariants[color as keyof typeof colorVariants] || colorVariants.default;

  return (
    <motion.div
      className={`inline-flex p-[2px] rounded-md bg-linear-to-r ${variant.border} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span
        className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-md ${variant.bg} ${variant.text}`}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default PillBadge;

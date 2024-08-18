import React from "react";
import styles from "@/assets/css/button/button.module.css";

interface ButtonProps {
  title: string;
  className?: string; // Optional className prop
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return <button className={` px-6 py-3 rounded ${className}`}>{title}</button>;
};

export default Button;

"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles = "",
  handleClick,
  btnType
}: CustomButtonProps) => {
  return (
    <button
      type={ btnType || "button"}
      onClick={handleClick}
      aria-label={title}
      style={{ backgroundColor: "#2B59FF", color: "#ffffff", borderRadius: 9999, padding: "12px 24px" }}
      className={`transition-colors ${containerStyles}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;

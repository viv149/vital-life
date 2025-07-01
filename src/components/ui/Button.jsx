import React from "react";
import PropTypes from "prop-types";

export default function Button({ variant = "fill", children, className = "", ...props }) {
  const base = "px-6 py-2 rounded-md text-lg font-medium transition-colors duration-200";
  const fill = "bg-green-700 text-white hover:bg-green-800";
  const outline = "bg-transparent border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white";
  const style = variant === "outline" ? outline : fill;

  return (
    <button className={`${base} ${style} ${className} cursor-pointer`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["fill", "outline"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
import * as React from "react";

function CustomArrow({ className, onClick }) {
  return <div className={className + " arrow"} onClick={onClick} aria-hidden />;
}

export default CustomArrow;

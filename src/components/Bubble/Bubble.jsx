import * as React from "react";
import "./BubbleStyle.scss";

const Bubble = () => {
  return (
    <section className="bubbles">
      <div className="w-100">
        <div className="bubblewrap small">
          <div></div>
          <div></div>
        </div>
        <div className="bubblewrap medium">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Bubble;

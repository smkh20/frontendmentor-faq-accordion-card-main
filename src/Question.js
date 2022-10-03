import React, { useRef } from "react";
import Arrow from "./Arrow";
const Question = ({ faq, toggle, show }) => {
  const contentEl = useRef();
  const { q, a } = faq;
  const cssclass = show ? "title dark" : "title gray";
  return (
    <div>
      <div className="questuontitle">
        <h2 className={cssclass} onClick={toggle}>
          {q}
        </h2>
        <Arrow />
      </div>
      <p
        ref={contentEl}
        className="answer"
        style={show ? { height: contentEl.current.scrollHeight + 10, paddingTop: "10px" } : { height: "0px", paddingTop: 0 }}
      >
        {a}
      </p>
      <div className="divider"></div>
    </div>
  );
};

export default Question;

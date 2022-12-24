import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {/* what is the difference between substring and slice */}
      {/* since inplace of "text.slice" if we use "text.substring" it gives the same result */}
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        style={{
          color: "#427fd4",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        className="read-or-hide"
      >
        {isReadMore ? "(more)" : "(less)"}
      </span>
    </p>
  );
}

import React from "react";

const Content = ({ title, clicked }) => {
  return (
    <div className="content" style={{ opacity: clicked ? 1 : 0 }}>
      <h2 style={{ opacity: clicked ? 1 : 0 }}>{title}</h2>
    </div>
  );
};

export default Content;

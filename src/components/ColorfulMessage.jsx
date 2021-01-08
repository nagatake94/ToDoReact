import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontStyle: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

import React from "react";
// import { taggedTemplateExpression } from "@babel/types";

function Text(props) {
  const { longText } = props;
  return (
    <div>
      <p>{longText}</p>
    </div>
  );
}

export default Text;
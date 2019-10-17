import React from "react";

function Credit(props) {
  const { copyright } = props;
  return (
    <div>
      <p>{copyright}</p>
    </div>
  );
}

export default Credit;

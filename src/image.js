import React from "react";

function Image(props) {
  const { picture } = props;

  return (
    <>
      <div>
        <img className="image" src={picture}></img>
      </div>
    </>
  );
}

export default Image;

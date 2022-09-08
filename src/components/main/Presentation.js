import React from "react";

const Presentation = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </React.Fragment>
  );
};

export default Presentation;

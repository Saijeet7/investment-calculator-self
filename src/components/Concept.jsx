import React from "react";
import componentsImage from "../assets/images/components.png";
const Concept = (props) => {
  const mapping = props.data.map((item) => {
    return (
      <li className="concept">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </li>
    );
  });

  return <ul id="concepts">{mapping}</ul>;
};

export default Concept;

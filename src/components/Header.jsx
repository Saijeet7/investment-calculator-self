import React from "react";
import keyConceptsImage from "../assets/images/key-concepts.png";

const Header = (props) => {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
};

export default Header;

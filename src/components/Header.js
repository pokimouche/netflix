import React from "react";

const Header = props => {
  return (
    <header>
      <img class="logo" src={props.logo} alt="logo"></img>
    </header>
  );
};

export default Header;

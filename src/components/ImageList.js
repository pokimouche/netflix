import React from "react";

const ImageList = props => {
  return (
    <ul>
      {props.images.map(element => {
        return (
          <li>
            <img src={element}></img>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageList;

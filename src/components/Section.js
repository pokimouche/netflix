import React from "react";
import Category from "./Category";
import ImageList from "./ImageList";

const Section = props => {
  return (
    <section>
      <Category title={props.element.category}></Category>
      <ImageList images={props.element.images}></ImageList>
    </section>
  );
};

export default Section;

import React from "react";
import { faHeart as empty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = ({ toggleHeart, value }) => {
  return (
    <FontAwesomeIcon 
      style={{ cursor: "pointer" }}
      onClick={toggleHeart}
      icon={value ? filled : empty}
    />
  );
};

export default Like;

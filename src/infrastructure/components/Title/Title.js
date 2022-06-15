import "./Title.scss";
import React from "react";
import PropTypes from "prop-types";


const Title = ({ titleText }) => {
  return (
    <>
      <h2 className="title">
        {titleText}
      </h2>
    </>
  );
};

Title.prototypes = {
    titleText: PropTypes.string.isRequired,
};

export default Title;

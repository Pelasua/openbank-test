import "./Text.scss";
import React from "react";
import PropTypes from "prop-types";


const Text = ({ subtitle, text }) => {
  return (
    <>
      {subtitle &&
        <h4 className="subtitle-text">{subtitle}</h4>
      }  
      <p className="text">{text}</p>
    </>
  );
};

Text.prototypes = {
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default Text;

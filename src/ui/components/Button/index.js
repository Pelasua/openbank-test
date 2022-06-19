import "./styles.scss";
import React from "react";
import PropTypes from "prop-types";



const Button = ({ text, isDisabled }) => {
  return (
    <>
      <button className="button" disabled={isDisabled}> {text} </button>
    </>
  );
};

Button.defaultProps = { 
    isDisabled: false,
}

Button.prototypes = {
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Button;

import "./styles.scss";
import React from "react";
import PropTypes from "prop-types";
import {getClassByType} from "../../../application/actions/Button"



const Button = ({ text, type, isDisabled }) => {
  const typeClass = getClassByType(type);

  return (
    <>
      <button className={`button ${typeClass}`} disabled={isDisabled}> {text} </button>
    </>
  );
};

Button.defaultProps = {
    type: 'default', 
    isDisabled: false,
}

Button.prototypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Button;

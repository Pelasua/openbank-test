import "./styles.scss";
import React from "react";
import PropTypes from "prop-types";
import {
  getClassByType,
  handleButtonClick,
} from "../../../application/actions/Button";
import { useDispatch } from "react-redux";

const Button = ({ text, type, interactionType, isDisabled }) => {
  const typeClass = getClassByType(type);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className={`button ${typeClass}`}
        disabled={isDisabled}
        onClick={() => dispatch(handleButtonClick(interactionType))}
      >
        {" "}
        {text}{" "}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "default",
  isDisabled: false,
};

Button.prototypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;

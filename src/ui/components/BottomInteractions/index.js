import "./styles.scss";
import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";


const BottomInteractions = ({ buttons }) => {
  return (
    <div className="bottom-interactions">
       {buttons.map((button, index) => (
            <Button key={index.toString} text={button.text} type={button.type} isDisabled={button.isDisabled} />
        ))}
    </div>
  );
};

BottomInteractions.defaultProps = {
    type: 'default', 
    isDisabled: false,
}

BottomInteractions.prototypes = {
  buttons: PropTypes.array.isRequired,
};

export default BottomInteractions;

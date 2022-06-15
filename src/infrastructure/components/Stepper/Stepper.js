import "./Stepper.scss";
import React from "react";
import Step from "../Step/Step";
import PropTypes from "prop-types";

const Stepper = ({ numberOfSteps }) => {
  return (
    <div className="stepper">
      <ul className="stepper__steplist">
        {[...Array(numberOfSteps)].map((x, index) => (
          <Step key={x} stepPosition={index} />
        ))}
      </ul>
    </div>
  );
};

Stepper.prototypes = {
  stepNumber: PropTypes.number,
};

export default Stepper;

import "./Step.scss";
import React from "react";
import PropTypes from "prop-types";

import { getStepNumberByPosition } from "../../../domain/services/Step.service";

const Step = ({ stepPosition }) => {
  return (
    <>
      <li className="step">
        <span className="step__number">
          {getStepNumberByPosition(stepPosition)}
        </span>
      </li>
    </>
  );
};

Step.prototypes = {
  stepPosition: PropTypes.number,
};

export default Step;

import "./Step1.scss";
import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title/Title";

const StepView1 = () => {
  return (
    <div className="stepview1">
      <Title titleText={'Crea tu password Manager'} />
    </div>
  );
};

StepView1.prototypes = {
  stepPosition: PropTypes.number,
};

export default StepView1;

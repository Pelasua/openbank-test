import "./StepView1.scss";
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import svg1 from "../../../assets/img/group.svg";
import svg2 from "../../../assets/img/group-3.svg";
const StepView1 = () => {
  const { t } = useTranslation();
  return (
    <div className="stepview1">
      <Title titleText={t("stepview1-title")} />
      <div className="stepview1__visual-introduction">
        <div className="stepview1__visual-introduction--left">
          <object data={svg1} className="stepview1__image"></object>
          <Text text={t("stepview1-visual-introduction-left")} />
        </div>
        <div className="stepview1__visual-introduction--right">
          <object data={svg2} className="stepview1__image"></object>
          <Text text={t("stepview1-visual-introduction-right")} />
        </div>
      </div>
      <Text subtitle={t("stepview1-subtitle1")} text={t("stepview1-text1")} />
      <Text subtitle={t("stepview1-subtitle2")} text={t("stepview1-text2")} />
    </div>
  );
};

StepView1.prototypes = {};

export default StepView1;

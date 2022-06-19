import "./styles.scss";
import StepView1 from "../StepView1";
import Stepper from "../../components/Stepper";
const MainView = () => {
  return (
    <div className="mainview">
      <Stepper numberOfSteps={3} />
      <div className="mainview__content">
        <StepView1 />
      </div>
    </div>
  );
};

MainView.prototypes = {};

export default MainView;

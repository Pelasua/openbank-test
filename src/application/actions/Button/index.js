import {
  initialState,
  buttonTypes,
  interactionTypes,
} from "../../../domain/entities/Button";

export const getClassByType = (type) => {
  return type in buttonTypes ? buttonTypes[type] : buttonTypes["default"];
};

export const buttonClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@app/cancelButtonClicked":
      return {
        ...state,
        isClicked: !state.isClicked,
        interaction: "cancel",
      };
    case "@app/continueButtonClicked":
      return {
        ...state,
        isClicked: !state.isClicked,
        interaction: "continue",
      };
    default:
      return state;
  }
};

export const handleButtonClick = (interactionType) => {
  return {
    type: `@app/${
      interactionTypes[interactionType]
        ? interactionTypes[interactionType]
        : interactionTypes["default "]
    }`,
  };
};

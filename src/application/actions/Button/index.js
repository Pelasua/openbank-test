import {initialState} from "../../../domain/entities/Button"

export const getClassByType = (type) => {
  const types = {
    default: "button--default",
    light: "button--light",
    "light-pink": "button--light-pink",
  };
  return type in types ? types[type] : types["default"];
};


export const buttonClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@app/buttonClicked":
      return {
        ...state,
        isClicked: !state.isClicked,
      };
    default:
      return state;
  }
};

export const handleButtonClick = () => {
  return {
    type: "@app/buttonClicked",
  };
};

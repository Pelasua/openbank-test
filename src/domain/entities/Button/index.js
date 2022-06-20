export const initialState = {
  isDisabled: false,
  isClicked: false,
  interaction: "",
};

export const buttonTypes = {
  default: "button--default",
  light: "button--light",
  "light-pink": "button--light-pink",
};

export const interactionTypes = {
  continue: "continueButtonClicked",
  cancel: "cancelButtonClicked",
  default: "noInteraction",
};

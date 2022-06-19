export const getClassByType = (type) => {
  const types = {
    default: "button--default",
    light: "button--light",
    "light-pink": "button--light-pink",
  };
  return type in types ? types[type] : types["default"];
};

export const updateObj = (oldObj, newProps) => {
  return {
    ...oldObj,
    ...newProps,
  };
};

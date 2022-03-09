const CHANGE_FILTER = "CHANGE_FILTER";

export const changeBerryFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};

export { CHANGE_FILTER };

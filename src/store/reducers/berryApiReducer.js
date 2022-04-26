export const FETCH_BERRY = "FETCH_BERRY";

const initialState = {
// berryItems: null,
berryItemsArray: []
};

const berryApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BERRY:
      console.log(state)
      return {
        berryItemsArray: [...state.berryItemsArray].concat(action.payload),
      };
    default:
      return state;
  }
};

export default berryApiReducer;

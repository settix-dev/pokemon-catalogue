const initialState = {
  berries: [
    {
      results: [],
    },
  ],
  currentBerry: '',
};

const berriesApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BERRIES":
      console.log(`State: ${state}`);
      return {
        ...state, 
        berries: [action.payload],
      };
    case "CREATE_BERRY":
      return {
        ...state,
        currentBerry: action.payload,
      };
    default:
      return state;
  }
};

export default berriesApiReducer;

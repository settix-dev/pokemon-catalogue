import { FETCH_BERRY } from "../reducers/berryApiReducer";

export const fetchBerries = () => {
  return async (dispatch) => {
    try {
      const singleBerriesArray = [];
      const response = await fetch(`https://pokeapi.co/api/v2/berry/`);
      const data = await response.json();
      console.log(data);
      // Loop through results array and fetch individual berry details
      for (let result of data.results) {
        console.log(result.name);
        const resultResp = await fetch(
          `https://pokeapi.co/api/v2/berry/${result.name}`
        );
        const resultData = await resultResp.json();
        console.log(resultData);
        singleBerriesArray.push(resultData);
      }
      dispatch({
        type: FETCH_BERRY,
        payload: singleBerriesArray,
      });
      dispatch({ type: "FETCH_BERRIES", payload: data });
    } catch (err) {
      console.error(`Something Wrong happened!! ${err}`);
    }
  };
};

export const createBerry = (berry) => {
  return {
    type: "CREATE_BERRY",
    payload: berry,
  };
};

export const fetchBerry = (filter) => {
  console.log("Inside fetch berry.");
  return async (dispatch) => {
    let jsonData = null;
    await fetch(`https://pokeapi.co/api/v2/berry/${filter}`)
      .then(async (request) => {
        let json = await request.json();
        return json;
      })
      .then((json) => {
        console.log(json);
        dispatch({
          type: FETCH_BERRY,
          payload: json,
        });
        // return json
        jsonData = json;
      })
      .catch((err) => console.error(`Whoops!! Something went wrong!!: ${err}`));
    return jsonData;
  };
};

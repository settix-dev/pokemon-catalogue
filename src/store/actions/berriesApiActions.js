import { FETCH_BERRY } from "../reducers/berryApiReducer";

export const fetchBerries = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/berry/`);
      const data = await response.json();
      console.log(data);
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

// export const fetchData = () => {

//   return (dispatch) => {
//       return fetch('https://jsonplaceholder.typicode.com/todos/1')
//           .then(response => response.json())
//           .then(json => dispatch(
//               { type: "FetchData", data: json }))
//           .catch(err => dispatch(
//               { type: "ERROR",msg: "Unable to fetch data" }))
//   }

// }

export const fetchBerry = (filter) => {
  console.log("Inside fetch berry.");
  return async (dispatch) => {
    let lamech = null
  // await  fetch(`https://pokeapi.co/api/v2/berry/${filter}`)
  
  //     .then( async (request) => {
  //       let json = await request.json();
  //       return json;
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       dispatch({
  //         type: FETCH_BERRY,
  //         payload: json,
  //       });
  //       lamech = json
  //       console.log('I want to use json data here!!')
  //       console.log(`Lamech is `, lamech)
  //       // return json
  //       return {name: "Roy"}
  //     })
  //     .catch((err) => console.error(`Whoops!! Something went wrong!!: ${err}`));
      console.log(`Lamech is `, lamech)
      return {name: "Roy"}
  };
};

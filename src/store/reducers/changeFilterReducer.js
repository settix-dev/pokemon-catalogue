import { CHANGE_FILTER } from "../actions/changeFilterAction"
const initialState = {
    filter: 'All'
}
const changeFilterReducer = (state = initialState, action) => {
switch (action.type) {
   case CHANGE_FILTER :
       return {
           ...state, filter: action.payload
       }
       default:
           return state
}
}

export default changeFilterReducer
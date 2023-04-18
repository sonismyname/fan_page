import actionTypes from "../actions/actionTypes";
const initState = {
  id: 1,
  bills: [],
  address: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.BUY_PRODUCT: {
      return {
        ...state,
        bills: [...state.bills, action.bill] || null,
        id: state.id + 1,
      };
    }
    case actionTypes.FETCH_ADDRESS: {
      return {
        ...state,
        address: action.address || null,
      };
    }
    default:
      return state;
  }
};
export default appReducer;
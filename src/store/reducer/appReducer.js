import actionTypes from "../actions/actionTypes";
const initState = {
  id: 1,
  bills: [],
  products: [],
  stores: [],
  users: [],
  detail_bills: []
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
    case actionTypes.ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, ...action.products] || null,
      };
    }
    case actionTypes.ADD_STORE: {
      return {
        ...state,
        stores: [...state.stores, ...action.stores] || null,
      };
    }
    case actionTypes.ADD_USER: {
      return {
        ...state,
        users: [...state.users, ...action.users] || null,
      };
    }
    case actionTypes.ADD_DETAILBILL: {
      return {
        ...state,
        detail_bills: [...state.detail_bills, ...action.detail_bills] || null,
      };
    }
    
    default:
      return state;
  }
};
export default appReducer;
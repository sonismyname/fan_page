import actionTypes from "../actions/actionTypes";
const initState = {
  bills: [],
  products: [],
  stores: [],
  users: [],
  detail_bills: [],
  carts: [],
  materials: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.BUY_PRODUCT: {
      return {
        ...state,
        bills: [...state.bills, action.bill] || null,
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
    case actionTypes.ADD_CART: {
      return {
        ...state,
        carts: [...state.carts, action.cart] || null,
      };
    }
    case actionTypes.REMOVE_CART: {
      return {
        ...state,
        carts: [] || null,
      };
    }
    case actionTypes.ADD_MATERIAL: {
      return {
        ...state,
        materials: [...state.materials, ...action.materials] || null,
      };
    }
    case actionTypes.CHANGE_STATUS: {
      const updateBills = state.bills.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, status: action.payload.status };
        } else {
          return item;
        }
      });
      return {
        ...state,
        bills: updateBills || null,
      };
    }
    default:
      return state;
  }
};
export default appReducer;

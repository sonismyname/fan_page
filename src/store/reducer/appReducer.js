import actionTypes from "../actions/actionTypes";
const initState = {
  bills: [],
  products: [],
  stores: [],
  users: [],
  detail_bills: [],
  carts: [],
  materials: [],
  id_chat : 2,
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
    case actionTypes.PLUSID: {
      return {
        ...state,
        id_chat: state.id_chat + 1,
      };
    }
    case actionTypes.SETIDCHAT: {
      return {
        ...state,
        id_chat: action.id_chat,
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
    // action.payload.status, status_update_date: action.payload.status_update_date
    case actionTypes.CHANGE_STATUS: {
      const updateBills = state.bills.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            status: [
              ...item.status,
              {
                time_status: action.payload.time_status,
                status_name: action.payload.status_name,
              },
            ],
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        bills: updateBills || null,
      };
    }
    case actionTypes.UPDATE_QUATITY: {
      const updateProducts = state.products.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            quatity: action.payload.quatity,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        products: updateProducts || null,
      };
    }
    default:
      return state;
  }
};
export default appReducer;

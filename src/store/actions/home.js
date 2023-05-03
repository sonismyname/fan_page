import actionTypes from "./actionTypes";
import * as apis from "../../apis";
export const buyProducts = (bill) => ({
  type: actionTypes.BUY_PRODUCT,
  bill: bill,
});

export const addProducts = (products) => ({
  type: actionTypes.ADD_PRODUCT,
  products: products,
});

export const addStore = (stores) => ({
  type: actionTypes.ADD_STORE,
  stores: stores,
});
export const addUser = (users) => ({
  type: actionTypes.ADD_USER,
  users: users,
});
export const addDetailBills = (detail_bills) => ({
  type: actionTypes.ADD_DETAILBILL,
  detail_bills: detail_bills,
});

export const addCart = (product) => ({
  type: actionTypes.ADD_CART,
  cart: product,
});
export const removeCart = () => ({
  type: actionTypes.REMOVE_CART,
});
export const addMaterial = (materials) => ({
  type: actionTypes.ADD_MATERIAL,
  materials: materials,
});
export const changeStatus = (id, status, date) => ({
  type: actionTypes.CHANGE_STATUS,
  payload: { id, status_name: status, time_status: date },
});

export const updateQuatity = (id, quatity) => ({
  type: actionTypes.UPDATE_QUATITY,
  payload: { id, quatity: quatity },
});
export const plusIdChat = () => ({
  type: actionTypes.PLUSID,
});

export const setIdChat = (id) => ({
  type: actionTypes.SETIDCHAT,
  id_chat: id,
});

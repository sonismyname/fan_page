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
  type: actionTypes.REMOVE_CART
});
export const addMaterial = (materials) => ({
  type: actionTypes.ADD_MATERIAL,
  materials: materials,
});
export const changeStatus = (id, status) => ({
  type: actionTypes.CHANGE_STATUS,
  payload: {id, status: status}
});
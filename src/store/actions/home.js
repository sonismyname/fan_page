import actionTypes from "./actionTypes";
import * as apis from "../../apis";
export const buyProducts = (bill) => ({
  type: actionTypes.BUY_PRODUCT,
  bill: bill,
});

// export const fetchAddress = async(dispatch) => {
//   try {
//     // console.log("dispatch", dispatch)
//     const response = await apis.getAddress();
//     console.log(response)
//     if (response?.data.code === 200) {
//       // console.log('catch')
//       dispatch({
//         type: actionTypes.GET_NEW_RELEASE,
//         newReleaseData: response?.data?.data,
//         // send objiect action
//       });
//     } else {
//       dispatch({
//         type: actionTypes.GET_NEW_RELEASE,
//         newReleaseData: null,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_NEW_RELEASE,
//       newReleaseData: null,
//     });
//   }
// }

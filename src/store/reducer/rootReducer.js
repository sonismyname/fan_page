import { combineReducers} from "redux";
import appReducer from "./appReducer";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}
const appConfig = {
    ...commonConfig,
    key: 'hoadon',
    whitelist: ['bills']
}
const rootReducer = combineReducers({
    app: persistReducer(appConfig, appReducer),
})

export default rootReducer
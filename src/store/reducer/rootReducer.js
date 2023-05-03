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
    key: 'data_base_fake',
    whitelist: ['bills', 'products', 'users', 'stores', 'detail_bills', 'materials', 'id_chat']
}
const rootReducer = combineReducers({
    app: persistReducer(appConfig, appReducer),
})

export default rootReducer
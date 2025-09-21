import { createStore, combineReducers } from "redux";
import homework4Reducer from "./homework4Reducer";
import homework2Reducer from "./homework2Reducer";
import homework3Reducer from "./homework3Reducer";
import homework5Reducer from "./homework5Reducer";

const rootReducer = combineReducers({
  home2: homework2Reducer,
  home3: homework3Reducer,
  home4: homework4Reducer,
  home5: homework5Reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// tạo store
const store = createStore(rootReducer);

export default store;

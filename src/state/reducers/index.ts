import { combineReducers } from "redux";
import repositoryReducers from "./repositriesReducers";

const reducers = combineReducers({
  repositories: repositoryReducers,
});

export default reducers;

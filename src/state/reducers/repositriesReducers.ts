import { IActions } from "../actions/index";
import { IActionType } from "../action-types/index";
interface RepositriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducers = (
  state: RepositriesState = initialState,
  actions: IActions
): RepositriesState => {
  switch (actions.type) {
    case IActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };

    case IActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, error: null, data: [] };

    case IActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: actions.payload, data: [] };

    default:
      return state;
  }
};
export default reducers;

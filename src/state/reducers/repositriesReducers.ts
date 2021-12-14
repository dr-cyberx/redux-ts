interface RepositriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface search_repositories {
  type: IActionType.SEARCH_REPOSITORIES;
  payload: string[];
}
interface search_repositories_success {
  type: IActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface search_repositories_error {
  type: IActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type IActions =
  | search_repositories
  | search_repositories_success
  | search_repositories_error;

enum IActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

const reducers = (
  state: RepositriesState,
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

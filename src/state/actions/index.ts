import { IActionType } from "../action-types/index";

interface search_repositories {
  type: IActionType.SEARCH_REPOSITORIES;
}
interface search_repositories_success {
  type: IActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface search_repositories_error {
  type: IActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type IActions =
  | search_repositories
  | search_repositories_success
  | search_repositories_error;

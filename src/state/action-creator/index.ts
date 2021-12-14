import axios from "axios";
import { Dispatch } from "redux";
import { IActionType } from "../action-types/index";
import { IActions } from "../actions/index";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<IActions>) => {
    dispatch({
      type: IActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data?.objects.map((result: any) => {
        return result.package.name;
      });
      
      dispatch({
        type: IActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });

    } catch (err: any) {
      dispatch({
        type: IActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootType } from "../state";

export const useTypeSelector: TypedUseSelectorHook<RootType> = useSelector;

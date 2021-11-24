import IAction from "../../models/shared/IAction";
import { IActionType } from "./IActionType";

export const SET_MENU = (e: boolean): IAction<IActionType, boolean> => {
	return {
		type: "SET_MENU",
		payload: e,
	};
};

export const SET_DARK_MODE = (e: boolean): IAction<IActionType, boolean> => {
	return {
		type: "SET_DARK_MODE",
		payload: e,
	};
};

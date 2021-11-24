import IProduct from '../../models/product/IProduct';
import IAction from '../../models/shared/IAction';
import ICart from '../../models/cart/ICart';
import { IActionType } from './IActionType';

export const ADD_CART = (e: IProduct): IAction<IActionType, IProduct> => {
	return {
		type: 'ADD',
		payload: e,
	};
};

export const REMOVE_CART = (e: number): IAction<IActionType, number> => {
	return {
		type: 'REMOVE',
		payload: e,
	};
};

export const DESTROY_CART = REMOVE_CART;
export const DELETE_CART = REMOVE_CART;

export const EMPTY_CART = (): IAction<IActionType, undefined> => {
	return {
		type: 'EMPTY',
		payload: undefined,
	};
};

export const PURGE_CART = EMPTY_CART;

export const FILL_CART = (e: ICart): IAction<IActionType, ICart> => {
	return {
		type: 'FILL',
		payload: e,
	};
};

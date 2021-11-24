import IAction from '../../models/shared/IAction';
import ICart from '../../models/cart/ICart';
import { IActionPayload, IActionType } from './IActionType';

export const cartInitState: ICart = [];

export const CartReducer = (
	state = cartInitState,
	action: IAction<IActionType, IActionPayload>
): ICart => {
	switch (action.type) {
		case 'ADD':
			if (
				typeof action.payload === 'number' ||
				Array.isArray(action.payload) ||
				action.payload === undefined
			) {
				throw Error('Not compatible');
			}
			return [...state, action.payload];

		case 'DELETE':
		case 'REMOVE':
		case 'DESTROY':
			if (typeof action.payload !== 'number') {
				throw Error('Not compatible');
			}
			return state.filter((x) => x.id === action.payload);

		case 'PURGE':
		case 'EMPTY':
			return [];

		case 'FILL':
			if (Array.isArray(action.payload))
				return [...state, ...action.payload];
			throw Error('Not compatible');

		default:
			return state;
	}
};

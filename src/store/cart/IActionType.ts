import IProduct from '../../models/product/IProduct';
import ICart from '../../models/cart/ICart';

export type IActionType =
	| 'ADD'
	| 'REMOVE'
	| 'DESTROY'
	| 'DELETE'
	| 'PURGE'
	| 'EMPTY'
	| 'FILL';

export type IActionPayload = undefined | number | IProduct | ICart;

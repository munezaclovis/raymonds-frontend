import IProduct from "../../models/product/IProduct";
import ICart from "../../models/shoppingcart/IShoppingCart";

export type IActionType =
	| "ADD"
	| "REMOVE"
	| "DESTROY"
	| "DELETE"
	| "PURGE"
	| "EMPTY"
	| "FILL";

export type IActionPayload = undefined | number | IProduct | ICart;

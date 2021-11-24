import { createContext, Dispatch, FC, useReducer } from 'react';
import IAction from '../../models/shared/IAction';
import IPageProps from '../../models/shared/IPageProps';
import ICart from '../../models/cart/ICart';
import { IActionPayload, IActionType } from './IActionType';
import { cartInitState, CartReducer } from './reducer';

type IContext = {
	cart: ICart;
	setCart: Dispatch<IAction<IActionType, IActionPayload>>;
};

export const CartContext = createContext<IContext>({
	cart: cartInitState,
	setCart: () => {},
});

const CartProvider: FC<IPageProps> = ({ children }) => {
	const [cart, setCart] = useReducer(CartReducer, cartInitState);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

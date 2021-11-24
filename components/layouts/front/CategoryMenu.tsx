import { useContext } from "react";
import { CartContext } from "../../../store/shoppingcart/context";
import HeaderIcon from "./HeaderIcon";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const CategoryMenu = () => {
	const {
		cart: { length },
	} = useContext(CartContext);
	return (
		<div className='w-full flex justify-center items-center mt-3 text-xs'>
			<span className='p-2 w-max rounded-md hover:text-indigo-500 hover:cursor-pointer bg-gray-200'>
				All
			</span>
			<span className='p-2 w-max rounded-md hover:text-indigo-500 hover:cursor-pointer'>
				T-Shirts
			</span>
			<span className='p-2 w-max rounded-md hover:text-indigo-500 hover:cursor-pointer'>
				Pants
			</span>
			<span className='p-2 w-max rounded-md hover:text-indigo-500 hover:cursor-pointer'>
				Hats
			</span>
			<span className='p-2 w-max rounded-md hover:text-indigo-500 hover:cursor-pointer'>
				Sneakers
			</span>
			<span className='p-2 w-max hover:text-indigo-500 hover:cursor-pointer relative'>
				<span className='flex'>
					<HeaderIcon Icon={ShoppingCartIcon} className='w-4' />
					<span className='absolute top-0 flex items-center justify-center text-xs leading-none text-indigo-100 bg-indigo-500 rounded-full px-1.5 transform translate-x-3/4 translate-y-[-10%]'>
						{length > 99 ? "99+" : length}
					</span>
				</span>
			</span>
		</div>
	);
};

export default CategoryMenu;

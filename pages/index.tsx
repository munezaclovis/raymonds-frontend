import Head from "next/head";
import { ThemeContext } from "../store/themeContext/context";
import { useContext, useEffect } from "react";
import { SET_DARK_MODE } from "../store/themeContext/actions";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Home() {
	const {
		theme: { darkMode },
		setTheme,
	} = useContext(ThemeContext);

	useEffect(() => {
		setTheme(
			SET_DARK_MODE(
				localStorage.getItem("darkMode") === "true" ? true : false
			)
		);
	}, []);

	useEffect(() => {
		darkMode === true
			? (document.body.className = "dark")
			: document.body.classList.remove("dark");
	}, [darkMode]);

	return (
		<>
			<Head>
				<title>Raymonds Clothing | Home</title>
				<meta name='developer' content='Clovis Muneza' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='mt-3 flex justify-center items-center px-5'>
				<div className='mr-auto flex space-x-5'>
					<span className='text-[14px] flex justify-center items-center hover:text-indigo-500 hover:cursor-pointer'>
						<span>Type</span> <ChevronDownIcon className='w-4' />
					</span>
					<span className='text-[14px] flex justify-center items-center hover:text-indigo-500 hover:cursor-pointer'>
						<span>Size</span> <ChevronDownIcon className='w-4' />
					</span>
					<span className='text-[14px] flex justify-center items-center hover:text-indigo-500 hover:cursor-pointer'>
						<span>Color</span> <ChevronDownIcon className='w-4' />
					</span>
					<span className='text-[14px] flex justify-center items-center hover:text-indigo-500 hover:cursor-pointer'>
						<span>Price Range</span>{" "}
						<ChevronDownIcon className='w-4' />
					</span>
				</div>

				<div className='ml-auto mr-5'>
					<span className='flex justify-center items-center group border px-2 py-1 rounded-md text-[14px] hover:text-indigo-500 hover:cursor-pointer'>
						<span>Sort by:</span>
						<span className='font-bold mx-2'>Popular</span>
						<ChevronDownIcon className='w-4' />
					</span>
				</div>
			</div>

			<div className='flex mt-3 justify-center items-center px5'></div>
		</>
	);
}

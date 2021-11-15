import { useContext } from "react";
import Link from "next/link";
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { ThemeContext } from "../store/themeContext/context";
import { SET_MENU } from "../store/themeContext/actions";
import MenuToggle from "./utilities/MenuToggle";

const Header = () => {
	const {
		theme: { menuOpen },
		setTheme,
	} = useContext(ThemeContext);

	return (
		<nav className='nav'>
			<div
				className='nav_mobile_toggle'
				onClick={() => {
					setTheme(SET_MENU(!menuOpen));
				}}
			>
				<MenuToggle />
				{/* <HeaderIcon className='hover:text-gray-700' Icon={MenuIcon} /> */}
			</div>
			<div className='nav__logo'>
				<span>Raymonds</span>
			</div>

			<ul
				id='nav__links'
				className={`nav__links${menuOpen ? " nav_mobile_open" : ""}`}
			>
				<li>
					<Link href='/'>
						<a> Men </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Women </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
			</ul>
		</nav>
		// <header className='w-full'>
		// 	<div className='p-3 flex w-full bg-white dark:bg-gray-900 relative justify-center items-center'>
		// 		<div className='absolute md:hidden left-0 pl-3'>
		// 			<div
		// 				className='w-8'
		// 				onClick={() => {
		// 					setTheme(SET_MENU(!menuOpen));
		// 				}}
		// 			>
		// 				<HeaderIcon
		// 					className=' block md:hidden hover:text-gray-700'
		// 					Icon={MenuIcon}
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div className='mx-auto md:mr-auto md:ml-0'>
		// 			<span className='text-2xl font-bold mr-auto'>Raymonds</span>
		// 		</div>
		// 		<nav className={`${menuOpen ? "hidden " : "block "}`}>
		// 			<div className='flex flex-col md:flex-row z-[2] md:z-0 p-3 md:p-0 justify-start items-center'>
		// 				<div
		// 					className='w-8 ml-auto'
		// 					onClick={() => {
		// 						setTheme(SET_MENU(!menuOpen));
		// 					}}
		// 				>
		// 					<HeaderIcon
		// 						className='block md:hidden hover:text-gray-700'
		// 						Icon={XIcon}
		// 					/>
		// 				</div>
		// 				<div className='nav__links'>
		// 					<Link href='/'>
		// 						<a className='ml-3 w-72 md:w-auto md:px-3 md:m-0 py-3 md:py-0 flex items-center justify-start hover:text-purple-400'>
		// 							<div className='w-5'>
		// 								<HeaderIcon
		// 									className='block'
		// 									Icon={HomeIcon}
		// 								/>
		// 							</div>
		// 							<span className='ml-2 md:ml-1 text-base'>
		// 								Home
		// 							</span>
		// 						</a>
		// 					</Link>
		// 					<Link href='/'>
		// 						<a className='ml-3 w-72 md:w-auto md:px-3 md:m-0 py-3 md:py-0 flex items-center justify-start hover:text-purple-400'>
		// 							<div className='w-5'>
		// 								<HeaderIcon
		// 									className='block'
		// 									Icon={HomeIcon}
		// 								/>
		// 							</div>
		// 							<span className='ml-2 md:ml-1 text-base'>
		// 								Home
		// 							</span>
		// 						</a>
		// 					</Link>
		// 					<Link href='/'>
		// 						<a className='ml-3 w-72 md:w-auto md:px-3 md:m-0 py-3 md:py-0 flex items-center justify-start hover:text-purple-400'>
		// 							<div className='w-5'>
		// 								<HeaderIcon
		// 									className='block'
		// 									Icon={HomeIcon}
		// 								/>
		// 							</div>
		// 							<span className='ml-2 md:ml-1 text-base'>
		// 								Home
		// 							</span>
		// 						</a>
		// 					</Link>
		// 				</div>
		// 			</div>
		// 		</nav>
		// 	</div>
		// 	nav
		// </header>
	);
};

export default Header;

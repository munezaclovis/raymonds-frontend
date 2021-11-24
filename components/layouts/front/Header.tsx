import { useContext, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "../../../store/themeContext/context";
import { SET_MENU } from "../../../store/themeContext/actions";
import MenuToggle from "../.././utilities/MenuToggle";
import { UserCircleIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
	const {
		theme: { menuOpen },
		setTheme,
	} = useContext(ThemeContext);

	useEffect(() => {}, []);

	return (
		<nav className='nav'>
			<div
				className='nav_mobile_toggle'
				onClick={() => {
					setTheme(SET_MENU(!menuOpen));
				}}
			>
				<MenuToggle />
			</div>
			<div className='nav__logo'>
				<Link href='/'>
					<a className='hover:text-indigo-500'>
						<span>Raymonds</span>
					</a>
				</Link>
			</div>

			<ul
				id='nav__links'
				className={`nav__links tracking-wide${
					menuOpen ? " nav_mobile_open" : ""
				}`}
			>
				<li>
					<Link href='/'>
						<a> Men </a>
					</Link>
				</li>
				<hr />
				<li>
					<Link href='/'>
						<a> Women </a>
					</Link>
				</li>
				<hr />
				<li>
					<Link href='/'>
						<a> Shop all </a>
					</Link>
				</li>
				<hr />
				<li>
					<Link href='/'>
						<a> Explore </a>
					</Link>
				</li>
				<hr />
				<li>
					<Link href='/'>
						<a className='flex justify-center items-center'>
							<HeaderIcon
								Icon={UserCircleIcon}
								className='w-5 mr-1'
							/>{" "}
							Login
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;

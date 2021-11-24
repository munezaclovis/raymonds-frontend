import { log } from 'console';
import {
	Link,
	useLocation,
	matchRoutes,
	useResolvedPath,
} from 'react-router-dom';

import Routes from '../data/Routes';

export interface INavLink {
	to: string;
	exact: string;
	className: string;
	activeClassName: string;
	inactiveClassName: string;
}

const NavLink = ({
	to,
	exact,
	className,
	activeClassName,
	inactiveClassName,
	...rest
}: INavLink) => {
	let location = useLocation();
	let resolvedLocation = useResolvedPath(to);
	let routeMatches = matchRoutes(Routes, location) || [];
	log(routeMatches);

	let isActive;
	if (exact) {
		isActive = location.pathname === resolvedLocation.pathname;
	} else {
		isActive = routeMatches.some(
			(match) => match.pathname === resolvedLocation.pathname
		);
	}

	let allClassNames =
		className +
		(isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

	return <Link className={allClassNames} to={to} {...rest} />;
};

export default NavLink;

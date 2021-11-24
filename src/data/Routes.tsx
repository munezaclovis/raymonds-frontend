import AdminLayout from '../components/layouts/admin/AdminLayout';
import FrontLayout from '../components/layouts/front/FrontLayout';
import NotFound from '../components/notfound/Index';

export default [
	{
		path: '/',
		element: <FrontLayout />,
		children: [
			{ path: '/', element: <p>Overview</p> },
			{
				path: '/new-users',
				element: <p>New User</p>,
				children: [],
			},
			{ path: '/sales', element: <p>Sales</p> },
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [],
	},
	{ path: '*', element: <NotFound /> },
];

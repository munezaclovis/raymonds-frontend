import { useRoutes } from 'react-router-dom';
import Layout from './components/layouts/front/FrontLayout';
import Routes from './data/Routes';
const App = () => {
	const AppRoutes = useRoutes(Routes);
	return <>{AppRoutes}</>;
};

export default App;

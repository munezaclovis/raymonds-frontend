import { url } from 'inspector';
import backgroundImage from '../../assets/svg/NotFound.svg';

const Index = () => {
	return (
		<div
			className='flex w-screen h-screen justify-center items-center bg-fixed notfound__background'
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<span className='text-5xl text-indigo-500'>NOT FOUND</span>
		</div>
	);
};

export default Index;

import './Loader.scss';

interface LoaderProps {
	isLoading: boolean;
}

function Loader({ isLoading }: LoaderProps) {
	if (isLoading) {
		return <div className='loader'></div>;
	} else return null;
}

export default Loader;

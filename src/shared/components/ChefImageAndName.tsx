import './ChefImageAndName.scss';

function ChefImageAndName(props: any) {
	return (
		<div className='image-overlay-container'>
			<img src={props.chefImage} alt={props.chefName} className='chef-of-the-week-image' />
			<div className='overlay-name'>{props.chefName}</div>
		</div>
	);
}

export default ChefImageAndName;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChefs, getMostViewedChefs, getNewChefs } from '../../../redux/chefSlice';
import ChefImageAndName from '../../../shared/components/ChefImageAndName';
import '../components/Chefs.scss';

type selectedCategoryType = 'All' | 'New' | 'Most Viewed' | null;
const categories: selectedCategoryType[] = ['All', 'New', 'Most Viewed'];

function Chefs() {
	const dispatch = useDispatch();
	const chefs = useSelector((state: any) => state.chef.chefs);

	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('All');

	const handleCategoryClick = (category: selectedCategoryType) => {
		setSelectedCategoryItem(category);
	};

	const selectedChefsArray = useSelector((state: any) => {
		switch (selectedCategoryItem) {
			case 'All':
				return state.chef.allChefs;
			case 'New':
				return state.chef.newChefs;
			case 'Most Viewed':
				return state.chef.mostViewedChefs;
			default:
				return [];
		}
	});

	useEffect(() => {
		switch (selectedCategoryItem) {
			case 'All':
				dispatch(getAllChefs());
				break;
			case 'New':
				dispatch(getNewChefs());
				break;
			case 'Most Viewed':
				dispatch(getMostViewedChefs());
				break;
			default:
				break;
		}
	}, [dispatch, selectedCategoryItem]);

	return (
		<div className='chefs-page-container'>
			<h1 className='chefs-page-title'>Chefs</h1>
			<div className='chefs-categories-container'>
				{categories.map((category) => (
					<p
						key={category}
						className={`restaurant-category-item ${
							selectedCategoryItem === category ? 'category-item-selected' : ''
						}`}
						onClick={() => handleCategoryClick(category)}
					>
						{category}
					</p>
				))}
			</div>
			<div className='chefs-images-and-names-container'>
				{selectedChefsArray.map((chef: any, index: number) => (
					<ChefImageAndName chefName={chef.name} chefImage={chef.image} key={index} />
				))}
			</div>
		</div>
	);
}

export default Chefs;

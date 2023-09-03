import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChefs } from '../../../redux/chefSlice';
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

	useEffect(() => {
		dispatch(getAllChefs());
	}, [dispatch]);

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
				{chefs.map((chef: any, index: number) => (
					<ChefImageAndName chefName={chef.name} chefImage={chef.image} key={index} />
				))}
			</div>
		</div>
	);
}

export default Chefs;

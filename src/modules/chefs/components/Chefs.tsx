import { useEffect, useState } from 'react';
import ChefImageAndName from '../../../shared/components/ChefImageAndName';
import '../components/Chefs.scss';
import { getAllChefsFromAPI } from '../api';

type selectedCategoryType = 'All' | 'New' | 'Most Viewed' | null;
const categories: selectedCategoryType[] = ['All', 'New', 'Most Viewed'];

function Chefs() {
	const [allChefs, setAllChefs] = useState([]);

	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('All');

	const handleCategoryClick = (category: selectedCategoryType) => {
		setSelectedCategoryItem(category);
	};

	useEffect(() => {
		async function getAllChefs() {
			try {
				const result = await getAllChefsFromAPI(selectedCategoryItem);
				setAllChefs(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getAllChefs();
	}, [selectedCategoryItem]);

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
				{allChefs.map((chef: any, index: number) => (
					<ChefImageAndName chefName={chef.name} chefImage={chef.image} key={index} />
				))}
			</div>
		</div>
	);
}

export default Chefs;

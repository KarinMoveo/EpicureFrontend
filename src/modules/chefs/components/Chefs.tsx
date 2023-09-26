import { useEffect, useState } from 'react';
import ChefImageAndName from '../../../shared/components/ChefImageAndName';
import { getAllChefsFromAPI } from '../api';
import '../components/Chefs.scss';

type selectedCategoryType = 'Show All' | 'New' | 'Most Viewed' | null;
const categories: selectedCategoryType[] = ['Show All', 'New', 'Most Viewed'];

function Chefs() {
	const [allChefs, setAllChefs] = useState([]);
	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('Show All');

	const handleCategoryClick = (category: selectedCategoryType) => {
		setSelectedCategoryItem(category);
	};

	async function getAllChefs() {
		try {
			const result = await getAllChefsFromAPI(selectedCategoryItem);
			setAllChefs(result.data);
		} catch (error: unknown) {
			console.log(error);
		}
	}

	useEffect(() => {
		getAllChefs();
	}, [selectedCategoryItem]);

	return (
		<div className='chefs-page-container'>
			<p className='chefs-page-title'>CHEFS</p>
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
					<ChefImageAndName chefName={chef.name} chefImage={chef.image} key={chef.id} />
				))}
			</div>
		</div>
	);
}

export default Chefs;

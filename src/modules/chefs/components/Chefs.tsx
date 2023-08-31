import { useState } from 'react';

import ChefImageAndName from '../../../shared/components/ChefImageAndName';

import chefsMockData from '../../../mockData/data/chefsMockData';

import '../components/Chefs.scss';

type selectedCategoryType = 'All' | 'New' | 'Most Viewed' | null;
const categories: selectedCategoryType[] = ['All', 'New', 'Most Viewed'];

function Chefs() {
	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('All');

	const handleCategoryClick = (category: selectedCategoryType) => {
		setSelectedCategoryItem(category);
	};

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
				{chefsMockData.map((chef, index) => (
					<ChefImageAndName chefName={chef.chefName} chefImage={chef.chefImage} key={index} />
				))}
			</div>
		</div>
	);
}

export default Chefs;

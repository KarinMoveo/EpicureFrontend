import { useState } from 'react';
import { selectedCategoryType } from '../types';

import './Categories.scss';

const categories: selectedCategoryType[] = ['Everything', 'New', 'Most Popular', 'Open Now', 'Map View'];

interface CategoriesProps {
	onClick: (category: selectedCategoryType) => void;
}

function Categories(props: CategoriesProps) {
	const [selectedCategory, setSelectedCategory] = useState<selectedCategoryType>('Everything');
	return (
		<div className='restaurants-categories-container'>
			{categories.map(
				(category) =>
					(category !== 'Map View' || window.innerWidth >= 768) && (
						<p
							key={category}
							onClick={() => {
								props.onClick(category);
								setSelectedCategory(category);
							}}
							className={`restaurant-category-item ${
								selectedCategory === category ? 'category-item-selected' : ''
							}`}
						>
							{category}
						</p>
					)
			)}
		</div>
	);
}

export default Categories;

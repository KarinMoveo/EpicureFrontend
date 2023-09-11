import { selectedCategoryType } from '../types';

import './Categories.scss';

const categories: selectedCategoryType[] = ['All', 'New', 'Most Popular', 'Open Now', 'Map View'];

interface CategoriesProps {
	selectedCategory: any;
	onClick: (category: selectedCategoryType) => void;
}

function Categories(props: CategoriesProps) {
	return (
		<div className='restaurants-categories-container'>
			{categories.map(
				(category) =>
					(category !== 'Map View' || window.innerWidth >= 768) && (
						<p
							key={category}
							onClick={() => props.onClick(category)}
							className={`restaurant-category-item ${
								props.selectedCategory === category ? 'category-item-selected' : ''
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

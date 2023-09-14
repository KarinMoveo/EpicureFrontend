import { useEffect, useState } from 'react';
import ChefImageAndName from '../../../shared/components/ChefImageAndName';
import { addChefFromAPI, deleteChefFromAPI, getAllChefsFromAPI } from '../api';
import '../components/Chefs.scss';

type selectedCategoryType = 'All' | 'New' | 'Most Viewed' | null;
const categories: selectedCategoryType[] = ['All', 'New', 'Most Viewed'];

function Chefs() {
	const [allChefs, setAllChefs] = useState([]);
	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('All');
	const [newChef, setNewChef] = useState({
		name: '',
		image: '',
	});

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

	async function handleOnDeleteChef(id: number) {
		await deleteChefFromAPI(id);
		await getAllChefs();
	}

	async function handleOnAddChefClick() {
		const { name, image } = newChef;
		await addChefFromAPI(name, image);
		setNewChef({ name: '', image: '' });
		await getAllChefs();
	}

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
					<ChefImageAndName
						chefName={chef.name}
						chefImage={chef.image}
						key={chef.id}
						onDelete={() => handleOnDeleteChef(chef.id)}
					/>
				))}
			</div>
			<div className='add-chefs-container'>
				<p>ADD CHEF!</p>
				<label>Chef Name: </label>
				<input
					type='text'
					value={newChef.name}
					onChange={(e) => setNewChef({ ...newChef, name: e.target.value })}
					required
				/>
				<label>Chef Image: </label>
				<input
					type='text'
					value={newChef.image}
					onChange={(e) => setNewChef({ ...newChef, image: e.target.value })}
					required
				/>
				<button onClick={() => handleOnAddChefClick()}>ADD</button>
			</div>
		</div>
	);
}

export default Chefs;

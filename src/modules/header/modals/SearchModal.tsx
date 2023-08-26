import React, { useState } from 'react';
import xIcon from '../assets/icons/x.svg';
import './SearchModal.scss';
import Modal from '../../../shared/components/Modal';

interface SearchModalProps {
	onClose: () => void;
	onSearch: (searchQuery: string) => void;
}

function SearchModal({ onClose, onSearch }: SearchModalProps) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		onSearch(searchQuery);
		onClose();
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<Modal onClose={onClose}>
			<div className='search-from-navbar-container'>
				<div className='search-from-navbar-row'>
					<img className='x-icon' src={xIcon} alt='x icon' onClick={onClose} />
					<p className='search-from-navbar-title'>Search</p>
				</div>
				<div className='search-from-navbar-input-container'>
					<input
						className='user-search-from-navbar'
						type='text'
						placeholder='Search for restaurant cuisine, chef'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyDown={handleKeyPress}
					/>
				</div>
			</div>
		</Modal>
	);
}

export default SearchModal;

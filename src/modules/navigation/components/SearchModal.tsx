import React, { useState } from "react";
import x from "../assets/x.svg";
import searchIcon from "../assets/searchIcon.svg";
import "../components/SearchModal.scss";

interface SearchModalProps{
    onClose: () => void;
    onSearch: (searchQuery: string) => void;
};

function SearchModal({ onClose, onSearch }: SearchModalProps){

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
        onClose();
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
  
    return(
        <div className="search-from-navbar-container">
            <div className="search-from-navbar-row">
                <img className="x" src={x} alt="x" onClick={onClose}/>
                <p className="search-from-navbar-title">Search</p>
            </div>
                <div className="search-from-navbar-input-container">
                    <img className="search-from-navbar-icon" src={searchIcon} alt="Search Icon" />
                    <input 
                        className="user-search-from-navbar" 
                        type="text" 
                        placeholder="Search for restaurant cuisine, chef" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>
    );
}

export default SearchModal;
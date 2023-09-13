import axios from "axios";

export async function getAllChefsFromAPI(selectedCategoryItem : any){
    const result = await axios.get(
        `http://localhost:5000/chefs?category=${selectedCategoryItem}`
    );
    
    return result;
}


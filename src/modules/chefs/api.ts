import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const chefsBaseUrl = `${BASE_URL}/chefs`;

export async function getAllChefsFromAPI(selectedCategoryItem : any){
    const result = await axios.get(
        `${chefsBaseUrl}?category=${selectedCategoryItem}`, {withCredentials:true}
    );
    
    return result;
}



import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const chefsBaseUrl = `${BASE_URL}/chefs`;

export async function getAllChefsFromAPI(selectedCategoryItem : any){
    const result = await axios.get(
        `${chefsBaseUrl}?category=${selectedCategoryItem}`
    );
    
    return result;
}

export async function deleteChefFromAPI(id: any){
    const result = await axios.delete(
        `${chefsBaseUrl}/deleteChef/${id}`
    );
    
    return result;
}

export async function updateChefFromAPI(id: any, name: string, image: string){
    const result = await axios.put(
        `${chefsBaseUrl}/updateChef/${id}?name=${name}&image=${image}`
    );
    
    return result;
}


export async function addChefFromAPI(name: string, image: string){
    const result = await axios.post(
        `${chefsBaseUrl}/addChef?name=${name}&image=${image}`
    );
    
    return result;
}


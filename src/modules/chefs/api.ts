import axios from "axios";
import { chef } from "../../mockData/data/types";

export async function getAllChefsFromAPI(selectedCategoryItem : any){
    const result = await axios.get(
        `http://localhost:5000/chefs?category=${selectedCategoryItem}`
    );
    
    return result;
}

export async function deleteChefFromAPI(id: any){
    const result = await axios.get(
        `http://localhost:5000/chefs/deleteChef/${id}`
    );
    
    return result;
}

export async function addChefFromAPI(name: string, image: string){
    const result = await axios.get(
        `http://localhost:5000/chefs/addChef?name=${name}&image=${image}`
    );
    
    return result;
}


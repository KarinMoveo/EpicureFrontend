import axios from "axios";

export async function getAllChefsFromAPI(selectedCategoryItem : any){
    const result = await axios.get(
        `http://localhost:5000/chefs?category=${selectedCategoryItem}`
    );
    
    return result;
}

export async function deleteChefFromAPI(id: any){
    const result = await axios.delete(
        `http://localhost:5000/chefs/deleteChef/${id}`
    );
    
    return result;
}

export async function updateChefFromAPI(id: any, name: string, image: string){
    const result = await axios.put(
        `http://localhost:5000/chefs/updateChef?id=${id}&name=${name}&image=${image}`
    );
    
    return result;
}


export async function addChefFromAPI(name: string, image: string){
    const result = await axios.post(
        `http://localhost:5000/chefs/addChef?name=${name}&image=${image}`
    );
    
    return result;
}


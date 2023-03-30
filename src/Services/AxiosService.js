import axios from "axios";

// axios.get("https://api.punkapi.com/v2/beers");

const baseUrl = "https://api.punkapi.com/v2/beers";

export const getAllBeers = () =>{
    return axios.get(baseUrl);

}

export const getBeerById = (id) =>{
    return axios.get(`${baseUrl}/${id}`);
}

export const deleteBeerById = (id) =>{
    // return axios.delete(`${baseUrl}/${id}`);
    return Promise.resolve();
}


export const loginUser = (username, password) =>{
    // TODO check axios post method how to send data as request body
    // return axios.post(`${baseUrl}/auth.....`, {username, password});
    return Promise.resolve({data:{token: "tt"}})
}

// const createBeer = (data) =>{
//     return axios.post(`${baseUrl}`,data);
// }

// export {getAllBeers,getBeerById};

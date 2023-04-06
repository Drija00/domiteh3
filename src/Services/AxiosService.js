//import React, { useState } from "react";
import axios from "axios";

// axios.get("https://api.punkapi.com/v2/beers");

// const baseUrl = "https://api.punkapi.com/v2/beers";
const baseUrl = "http://localhost:8080";

export const getAllBeers = () =>{
    return axios.get(`${baseUrl}/beers`);

}

export const getBeerById = (id) =>{
    return axios.get(`${baseUrl}/beers/${id}`);
}

export const deleteBeerById = (id) =>{
    // return axios.delete(`${baseUrl}/${id}`);
    return Promise.resolve();
}


export const loginUser = (username, password) =>{
<<<<<<< HEAD
    const params = new URLSearchParams([['email', username],['password', password]]);
    return axios.get(`${baseUrl}/api/v1/auth/user-email-pass`, {params});
=======
    // TODO check axios post method how to send data as request body
    // return axios.post(`${baseUrl}/auth.....`, {username, password});
    return Promise.resolve({data:{token: "tt"}})
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
}

// const createBeer = (data) =>{
//     return axios.post(`${baseUrl}`,data);
// }

// export {getAllBeers,getBeerById};
<<<<<<< HEAD


=======
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d

import React, {useState,useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import Beer from '../Components/Beer';
import {getAllBeers} from "../Services/AxiosService";
import "../Styles/Home.css"
import Context from '../Components/Context';
import Footer from '../Components/Footer';

const Home = () => {
const context = useContext(Context);
const searchTerm = context.searchTerm;
const orderType = context.orderType;
<<<<<<< HEAD
const user = context.user;
=======
const token = context.token;
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
const count = context.count;
const setCount = context.setCount;
const cartData = context.cartData;
const setCartData = context.setCartData;
console.log("XXXXXXXXX   "+user.email);

const navigate = useNavigate();

const[beers,setBeers] = useState([]);
const[currentPage,setCurrentPage] = useState(1);
const beersPerPage = 8;

const loadBears= ()=>{

    getAllBeers()
        .then(res => {
            let beersCopy = [...res.data].map(beer=>{
<<<<<<< HEAD
                return {...beer,qt:1,totalPrice:beer.price,buttonLabel:"Add to cart"}
=======
                return {...beer,qt:1,totalPrice:beer.abv,buttonLabel:"Add to cart"}
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
            })
            // console.log(res,"response");
            let filteredData = searchTerm ? beersCopy.filter((beer)=>beer.name.toLowerCase().includes(searchTerm.toLowerCase())): beersCopy;
            if(orderType==="asc"){
                filteredData.sort((a,b)=>(a.name > b.name ? 1 : -1));
            }if(orderType==="dsc"){
                filteredData.sort((a,b)=>(a.name > b.name ? -1 : 1));
            }
            setBeers(filteredData);
            // console.log(res.data," beers ")
        }).catch(err =>{
        console.log(err,"error");
    })
}

useEffect(()=>{
    loadBears();
},[searchTerm,orderType])


  //Get current posts
const indexOfLastBeer = currentPage*beersPerPage;
const indexOfFirstBeer = indexOfLastBeer-beersPerPage;
const currentPost = beers.slice(indexOfFirstBeer,indexOfLastBeer);


  //Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);


const totalBeers = beers.length;

console.log(beers);

return (
    <div className='main'>
    <section className='content'>
<<<<<<< HEAD
        {<Beer user={user} cartData={cartData} setCartData={setCartData} count={count} setCount={setCount} beers={currentPost} navigate={navigate} loadBears={loadBears}/>}
=======
        {<Beer token={token} cartData={cartData} setCartData={setCartData} count={count} setCount={setCount} beers={currentPost} navigate={navigate} loadBears={loadBears}/>}
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
    </section>
    <Context.Provider value={{beers,beersPerPage,totalBeers,paginate}}>
        <Footer/>
    </Context.Provider>
    </div>
)
}

export default Home

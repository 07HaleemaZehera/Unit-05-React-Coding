import React from 'react'
import axios from 'axios'
import {  useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponents } from './ProductComponents';
import { setProducts } from "../redux/actions/productAction";


 export const ProductList = () => {
   const products=useSelector((state)=>state)
   const dispatch=useDispatch()

   const fetchProducts=async ()=>{
const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
  console.log("err",err)
})
dispatch(setProducts(response.data));

   }
   useEffect(()=>{
     fetchProducts();
   },[fetchProducts])
   console.log(products);
  return (
    <div  className='ui grid container'>
      <ProductComponents />
    </div>
  )
}


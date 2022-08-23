import React,{useState, useEffect} from 'react'
import {useSearchParams} from "react-router-dom"
import ProductsList from '../components/ProductsList'
import Axios from "axios"

const SearchResults = () => {
  const [searchParams]= useSearchParams();
  const [products, setProducts]= useState([]);

  useEffect(() => {
      Axios.get(`https://dummyjson.com/products/search?q=${searchParams.get("keyword")}`)
      .then(res => setProducts(res.data.products))
  },[searchParams])
  return (
    <>
      <h4>SearchResults</h4>
      {products.length === 0 && <em>No products found</em>}
      {products.length  &&  <ProductsList products={products}/>}
     
    </>
    
  )
}

export default SearchResults
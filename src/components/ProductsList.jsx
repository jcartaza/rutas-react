import React from 'react'
import {Link} from "react-router-dom"
const ProductsList = ({products}) => {
  return (
    <ul>
      {products.map(product =>{
       return (
        <li key={product.id}>
        <strong>{product.title}</strong>{" "}
        <Link to={`/products/${product.id}`}>[More details + ]
        </Link>
       </li>)
      })}
    </ul>
  );
}

export default ProductsList
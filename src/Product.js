import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Product.css'


function Product(){
const [product,setProduct]=useState({
    title:"Apple iPhone 15",
    price:"AED 599",
    sku:1234567,
    isWishlist:true
})
let wishListIcon=product.isWishlist ? "../images/heart-filled.png" : "../images/heart-empty.png"
function iconToggle(){
    setProduct(function(pIcon){
        return{
            ...pIcon,isWishlist:!pIcon.isWishlist
        }
    })
}
  return (
    <>
    <div className='mt-5 text-center product-container'>
        <img className='mt-2' src="../images/iphone15.png" alt="" /><br />
        <img className="heart-icon" src={wishListIcon} onClick={iconToggle} alt="" />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.sku}</p>
        <br />
    </div>
    </>  )
}

export default Product
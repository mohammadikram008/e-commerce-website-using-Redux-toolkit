import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/cartSlice'; 
import {fetchProducts} from '../store/productSlice'
import { STATUSES } from '../store/productSlice';
const Products = () => {
    // const [products,setProducts]=useState([]);
    const dispatch=useDispatch();
    let ary=[];
const {data: products,status}=useSelector((state)=>state.product);
    useEffect(()=>{
dispatch(fetchProducts());
      // const fetchProducts=async ()=>{
      //   const res=await fetch('https://fakestoreapi.com/products');
      //   const data=await res.json();
      //   console.log(data);
      //   setProducts(data);
      // }
      // fetchProducts();
      console.log(products);
     
    },[])
    
    const handleadd=(product)=>{
      dispatch(add(product));
  
     ary.push(product)
      
      localStorage.setItem("product",JSON.stringify(ary));

    }
    if(status === STATUSES.LOADING){
      return <h2>loading...</h2>
    }
    if(status ===STATUSES.ERROR){
      <h2>Something Want Wrong!</h2>
    }
  return (
    <div className='productsWrapper'>
      {
        products.map(product=>(
            <div className='card' key={product.id}>
                <img src={product.image}></img>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=>handleadd(product)} className='btn'>Add to cart</button>
                
                 </div>
        ))
      }
    </div>
  )
}

export default Products

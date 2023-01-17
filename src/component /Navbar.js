import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  const [newproduct,setNewproduct]=useState([]);
  useEffect(()=>{
    let value= localStorage.getItem('product');
    setNewproduct(JSON.parse(value));
console.log(JSON.parse(value));

  })
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

      <span className='logo'>REDUX STORE</span>
      <div >
        <Link to='/'  className='navLink'>Home</Link>
        <Link to='/cart' className='navLink'>Cart</Link>
        <span className='cartCount'>Cart items :{newproduct.length}</span>
      </div>
    </div>
  )
}

export default Navbar

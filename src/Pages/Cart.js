import React ,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const product = useSelector((state) => state.cart);
  const [newproduct,setNewproduct]=useState([]);
const dispatch=useDispatch();
  const handleRemove = (productid) => {
dispatch(remove(productid));
let items =JSON.parse(localStorage.getItem("product"));
    items = items.filter((item) => item.id !== productid);
    localStorage.setItem("product", JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem("item");

  };
}
  useEffect(()=>{
   let value= localStorage.getItem('product');
    setNewproduct(JSON.parse(value));
console.log(JSON.parse(value));
  },[newproduct])
  
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
   
        {newproduct.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" ></img>
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Cart;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Cart({ cartItems }) {

    const[det, setDet] = useState([]);
    const[n, setN] = useState('');

    function deletecart(){
      axios.delete(`http://localhost:8080/deleteBycartName/${n}`)
      .then((response)=>{
        console.log(response.data)
        window.location.reload();
      })
    }

    function getcart(){
      axios.get('http://localhost:8080/showcartdetails')
      .then((response)=>{
        console.log(response.data);
        setDet(response.data);
      })
    }

    useEffect(()=>getcart,[]);
  return (
    
    <div className="cart">
      <h2 style={{fontFamily:'cursive',fontSize:'4vh'}}>Cart</h2>
      <ul>
        {det.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price}
          </li>
        ))}
      </ul>
      <input type='text' placeholder='Enter item to delete' value={n} onChange={(e)=>{setN(e.target.value)}}/>
      <button onClick={deletecart}>Delete</button>
    </div>
  
  );
}

export default Cart;

import React from 'react'
import { fetchCartData } from "./api";
import { useEffect, useState } from "react";
import styles from "../Components/Cart.module.css";

const Cart = () => {
    const [cart, setCart] = useState([])
    console.log("cart", cart)
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        fetchCartData()
          .then((res) => {
            setCart(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div className={styles.cartContainer}>{cart.map((e)=>(
      <div className={styles.mainDiv}><img src={e.image} alt="dff"/>
      <div className={styles.details}>
    
          <h3>{e.name}</h3>
          <p>Category: {e.category}</p>
          <p>Brand: {e.brand}</p>
          <p>Price: ₹{e.price}</p>

          </div></div>
          
    ))}</div>
  )
}

export default Cart
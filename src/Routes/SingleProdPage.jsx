import React from "react";
import {    useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Components/SingleProd.module.css";

export const fetchEyesData = (id) => {
  return fetch(`http://localhost:9090/products/${id}`).then((res) =>
    res.json()
  );
};

const SingleProdPage = () => {
  const [data, setData] = useState({});
  const [carData, setCartData] = useState({})

console.log(carData)
const para = useParams();

  useEffect(() => {
    fetchEyesData(para.id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [para.id]);

const handleCart= async( name, price, category, brand, image)=>{
  console.log("categoy", category)
let res = await fetch(`http://localhost:9090/carts`, {
  method:"POST",
  headers:{
    'content-type': 'application/json'
  },
  body:JSON.stringify({
       name:name,
    price:price,
    category:category,
    brand:brand,
    image:image
  })
}).then(res=>{
  setCartData(res)
}).catch(err=>console.log(err))
alert("product added to cart")
}

  return (
    <div className={styles.singleProddiv}>
      <img src={data.api_featured_image} alt="dsd" />

      <div className={styles.singlePageContainer}>
        <h2>{data.name}</h2>
        <p>
          <b>Product Type</b> : {data.product_type}
        </p>
        <p>
          <b>Category</b> : {data.category}
        </p>
        <p>
          <b>Price</b> : ₹{data.price}
        </p>
        <p>
          {" "}
          <b>Brand</b>: {data.brand}
        </p>
        <p>
          {" "}
          <b>Description</b>: {data.description}
        </p>
        <button onClick={()=>handleCart(data.name, data.price, data.category, data.brand, data.api_featured_image)} className={styles.button}>Add to Cart</button>
      </div>
      
    </div>
  );
};

export default SingleProdPage;

import React from 'react'
import { fetchLipsData } from "./api";
import { useEffect, useState } from "react";
import styles from "../Components/Lips.module.css"
import { Link } from "react-router-dom";

const Lips = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchLipsData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div className={styles.lipContainer}>
    {data.map((e)=>(
      <div key={e.id}>
      <Link to={`/Eyes/${e.id}`}>
      <div className={styles.lipDiv}>
        <img src={e.api_featured_image} alt="dcsfe" />
      <h2>{e.name}</h2> 
      <h3>MRP ₹{e.price}</h3>
      <button className={styles.button}>Add to Cart</button>
        </div>
        </Link>
        </div>
))}
  </div>;
}

export default Lips
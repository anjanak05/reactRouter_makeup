import React from 'react'
import {fetchMakeupData} from "./api"
import { useState, useEffect } from 'react';
import styles from "../Components/Face.module.css"
import { Link } from "react-router-dom";

const MakeupFace = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchMakeupData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div className={styles.faceContainer}>
    {data.map((e)=>(
     <div key={e.id}>
     <Link to={`/Eyes/${e.id}`}>
     <div className={styles.faceDiv}>
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

export default MakeupFace
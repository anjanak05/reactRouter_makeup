import React from 'react'
import {fetchMakeupData} from "./api"
import { useState, useEffect } from 'react';
import styles from "../Components/Face.module.css"
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
      <div className={styles.faceDiv}>
        <img src={e.api_featured_image} alt="dcsfe" />
      <h2>{e.name}</h2> 
      <h3>MRP ₹{e.price}</h3>
        </div>
))}
  </div>;
}

export default MakeupFace
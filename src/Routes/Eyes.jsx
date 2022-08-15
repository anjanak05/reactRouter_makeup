import React from "react";
import { fetchEyesData } from "./api";
import { useEffect, useState } from "react";
import styles from "../Components/Eyes.module.css"
import { Link } from "react-router-dom";


const Eyes = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchEyesData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div className={styles.eyesContainer}>
    {data.map((e)=>(
      <div key={e.id}>
        <Link to={`/Eyes/${e.id}`}><div className={styles.eyesDiv}>
      <img src={e.api_featured_image} alt="dcsfe" />
    <h2>{e.name}</h2> 
    <h3>MRP ₹{e.price}</h3>
      </div></Link>
        </div>
      
))}
  </div>;
};

export default Eyes;

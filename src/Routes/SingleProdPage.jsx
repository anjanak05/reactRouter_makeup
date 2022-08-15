import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Components/SingleProd.module.css";

export const fetchEyesData = (id) => {
  return fetch(`http://localhost:9090/products/${id}`).then((res) =>
    res.json()
  );
};

const SingleProdPage = () => {
  const [data, setData] = useState({});
  const para = useParams();
  console.log(data);

  useEffect(() => {
    fetchEyesData(para.id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [para.id]);

  return (
    <div className={styles.singleProddiv}>
      <img src={data.api_featured_image} alt="dsd" />
      <div className={styles.singlePageContainer}>
        <h2>{data.name}</h2>
        <p>{data.product_type}</p>
        <p>{data.brand}</p>
        <p>{data.brand}</p>
        <p>{data.brand}</p>
      </div>
    </div>
  );
};

export default SingleProdPage;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./api";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div>
    {data.map((e)=>(
      <div>
        <h4>{e.name}</h4                                                                                                                                                                          >
      <img src={e.api_featured_image} alt="dcsfe" />
        </div>
))}
  </div>;
};

export default Home;

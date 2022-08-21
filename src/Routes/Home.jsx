import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  
let [searchParam, setSearchParam] = useSearchParams()
const initVal = Number(searchParam.get("page"))||1;
const [page, setPage] = useState(initVal)

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = (page) => {
    fetchData({page})
      .then((res) => {
        setData(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    setSearchParam({page})
  },[page])

  
  return (
    <>  
     <button disabled={page===1} onClick={()=>setPage(page=>page-1)}>prev</button>
      <button >{page}</button>
      <button onClick={()=>setPage(page=>page+1)}>Next</button>
      <div
      style={{
        display: "grid",
        width: "90%",
        margin: "auto",
        gap: "30px",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >

     
      {data.map((e) => (
        <div>
          <h4>{e.name}</h4>
          <img
            style={{ width: "130%", height: "250px" }}
            src={e.api_featured_image}
            alt="dcsfe"
          />
        </div>
      ))}
    </div>
    </>

  );
};

export default Home;

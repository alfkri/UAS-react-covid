import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import ENDPOINTS from "../utils/constants/endpoints";
import axios from "axios";
import Ind from "../components/Indonesia";



function Indonesia() {
  const [ind, setInd] = useState([]);

  useEffect(()=>{
    getDataInd();
  },[]);

  async function getDataInd(){
    const response = await axios(ENDPOINTS.DATAINDONESIA);
    const covid = [
      {
        status:"recovered",
        data: response.data.recovered,
      },
      {
        status: "deaths",
        data: response.data.deaths,
      },
      {
        status: "confirmed",
        data: response.data.confirmed,
      } 
    ];

    setInd(covid);

  }

  return (
    <>
      <Hero />
      <Ind ind={ind}/>
    </>
  );
}

export default Indonesia;

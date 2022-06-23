import Global from "../components/Global";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import ENDPOINTS from "../utils/constants/endpoints";
import axios from "axios";



function Home() {
  const [global, setGlobal] = useState([]);

  useEffect(()=>{
    getDataGlobal();
  },[]);

  async function getDataGlobal(){
    const response = await axios(ENDPOINTS.DATAGLOBAL);
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

    setGlobal(covid);

  }

  return (
    <>
      <Hero />
      <Global global={global}/>
    </>
  );
}

export default Home;

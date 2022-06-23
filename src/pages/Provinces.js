import Provinsi from "../components/Provinsi";
import Hero from "../components/Hero";
import FormCovid from "../components/FormCovid";
import { useState } from "react";
import data from "../utils/constants/provinces";


function Provinces(){
    const [data_prov, setData_Prov] = useState(data.provinces);
    return (
        <> 
            <Hero/>
            <Provinsi data_prov = {data_prov} setData_Prov={setData_Prov}/>
            <FormCovid data_prov = {data_prov} setData_Prov={setData_Prov}/>
        </>
    );
} 

export default Provinces;
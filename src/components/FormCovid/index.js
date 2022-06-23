import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProvinsi } from "../../features/covidSlice";
import Alert from "../Alert";
import StyledFormCovid, { Container } from "./FormCovid.styled";


function FormCovid(props){
    const {data_prov} = props;

    const [provinsi, setProvinsi] = useState("");

    const [status, setStatus] = useState("");

    const [jumlah, setJumlah] = useState("");

    function handleProvinsi(e){
        setProvinsi(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value);
    }

    function handleJumlah(e){
        setJumlah(e.target.value);
    }

    //Membuat state jika title empty
    const [isProvinsiEmpty, setProvinsiEmpty] = useState(false);

    //Membuat state jika date empty
    const [isStatusEmpty, setStatusEmpty] = useState(false);

    //Membuat state jika poster empty
    const [isJumlahEmpty, setJumlahEmpty] = useState(false);

    const dispatch = useDispatch();
    
    function handleSubmit(e){
        e.preventDefault();
        
        if (provinsi === ""){
            setProvinsiEmpty(true);
        }
        else if (status === ""){
            setProvinsiEmpty(false);
            setStatusEmpty(true);
        }
        else if(jumlah === ""){
            setProvinsiEmpty(false);
            setStatusEmpty(false);
            setJumlahEmpty(true);
        }
        else{
            const dataprov = {
                provinsi: provinsi,
                status: status,
                jumlah: jumlah 
            }

            dispatch(updateProvinsi(dataprov));

            // setData_Prov([...data_prov]);
    
            // console.log(dataprov);
        
            // const find_kota = data_prov.findIndex((kota => kota.kota === provinsi));
    
            // data_prov[find_kota][status] = jumlah;
    
        }

    }


    return(
        <StyledFormCovid>
            <Container>
                <section>
                    <div className="covid__left">
                        <img src="https://img.freepik.com/free-vector/flat-vaccination-campaign-illustration_23-2148958754.jpg?t=st=1650289213~exp=1650289813~hmac=876b0630ce4c6b1bcddf3bd6f6b33391bcb4583e3ef67d5cf8c6ff1e665e5f9d&w=740" alt="" />
                    </div>
                    <div className="covid__right">
                        <h2>Form Covid</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="covid__form">
                                <label>Provinsi</label>
                                <select onChange={handleProvinsi}>
                                    <option>--Choose here--</option>
                                    {
                                        data_prov.map(function(data_prov){
                                        return <option key = {data_prov.kota} value={data_prov.kota}>{data_prov.kota}</option>;
                                        })
                                    }
                                </select>
                                {
                                    isProvinsiEmpty && <Alert>Provinsi wajib diisi</Alert>
                                }
                            </div>
                            <div className="covid__form">
                                <label>Status</label>
                                <select onChange={handleStatus}>
                                    <option>--Choose here--</option>
                                    <option value="kasus">Positif</option>
                                    <option value="sembuh">Sembuh</option>
                                    <option value="dirawat">Dirawat</option>
                                    <option value="meninggal">Meninggal</option>      
                                </select>
                                {
                                    isStatusEmpty && <Alert>Status wajib diisi</Alert>
                                }
                            </div>
                            <div className="covid__form">
                                <label>Jumlah</label>
                                <input type="number" onChange={handleJumlah}/>
                                {
                                    isJumlahEmpty && <Alert>Jumlah wajib diisi</Alert>
                                }
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </section>
            </Container>
        </StyledFormCovid>
    )
}

export default FormCovid;
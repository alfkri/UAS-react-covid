import DataProv from "../DataProv";
import StyledProvinsi, { Container } from "./Provinsi.styled";

function Provinsi(){
//     const {data_prov} = props;
    const data_prov = useSelector((store)=> store.covid.provinces);

    return(
        <StyledProvinsi>
            <Container>
                <section>
                    <div className="provinsi__title">
                        <h2>Provinsi</h2>
                        <p>Data Covid Berdasarkan Provinsi</p>
                    </div>
                    <div className="provinsi__content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Provinsi</th>
                                    <th>Positif</th>
                                    <th>Sembuh</th>
                                    <th>Dirawat</th>
                                    <th>Meninggal</th>
                                </tr>
                            </thead>   
                            <tbody>       
                                {
                                    data_prov.map(function(data_prov){
                                        return <DataProv key = {data_prov.kota} data_prov = {data_prov}/> 
                                    })
                                } 
                            </tbody>
                        </table>
                    </div>       
                </section>
            </Container>
        </StyledProvinsi>
    );
}

export default Provinsi;

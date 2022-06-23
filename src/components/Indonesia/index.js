import ENDPOINTS from "../../utils/constants/endpoints";
import DataInd from "../DataInd";
import StyledIndonesia, { Container } from "./Indonesia.styled";



function Ind(props){
    const {ind} = props;
    return(
        <StyledIndonesia>
            <Container>
                <section>
                    <div className="indonesia__title">
                        <h2>Indonesia</h2>
                        <p>Data Covid Berdasarkan Indonesia</p>
                    </div>
                    <div className="indonesia__container">
                        {
                            ind.map(function(data_ind){
                                return <DataInd key = {data_ind.status} data_ind = {data_ind}/> 
                            })
                        }
                    </div>
                </section>
                <section>
                    <div className="indonesia__title">
                        <h2>Summary</h2>
                        <p>Summary Data Indonesia</p>
                    </div> 
                    <img src={ENDPOINTS.STATGAMBAR2} alt="" />
                </section>
            </Container>        
        </StyledIndonesia>
    );
}

export default Ind;
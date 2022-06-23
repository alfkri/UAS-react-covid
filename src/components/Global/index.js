import DataGlobal from "../DataGlobal";
import ENDPOINTS from "../../utils/constants/endpoints";
import StyledGlobal, { Container } from "./Global.styled";



function Global(props){
    const {global} = props;
    return(
        <StyledGlobal>
            <Container>
                <section>
                    <div className="global__title">
                        <h2>Global</h2>
                        <p>Data Covid Berdasarkan Global</p>
                    </div>
                    <div className="global__container">
                        {
                            global.map(function(data_global){
                                return <DataGlobal key = {data_global.status} data_global = {data_global}/> 
                            })
                        }
                    </div>
                </section>
                <section>
                    <div className="global__title">
                        <h2>Summary</h2>
                        <p>Summary Data Global</p>
                    </div> 
                    <img src={ENDPOINTS.STATGAMBAR1} alt="" />
                </section>
            </Container>
        </StyledGlobal>
    );
}

export default Global;

import StyledDataGlobal from "./DataGlobal.styled";

function DataGlobal(props){
    const {data_global} = props;
    return (
        <StyledDataGlobal>
            <div>
                <h4>{data_global.status}</h4>
                <h2 className="value">{data_global.data.value.toLocaleString()}</h2>
            </div>
        </StyledDataGlobal>
    );
}

export default DataGlobal;
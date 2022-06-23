import StyledDataInd from "./DataInd.styled";

function DataInd(props){
    const {data_ind} = props;
    return (
        <StyledDataInd>
            <div>
                <h4>{data_ind.status}</h4>
                <h2 className="value">{data_ind.data.value.toLocaleString()}</h2>
            </div>
        </StyledDataInd>
    );
}

export default DataInd;
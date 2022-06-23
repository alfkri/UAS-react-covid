import styled from "styled-components";


const StyledDataInd = styled.div`

    background-color: #06D6A0;
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 7px 10px rgb(80, 80, 80);
    font-family: 'Poppins', sans-serif;

    h4{
        font-size: 25px;
    }

    h2{
        font-size: 35px;
    }

    :nth-child(1) .value {
        color: #b40012;
    }

    :nth-child(2) .value {
        color: #38b000;
    }

    :nth-child(3) .value {
        color: #5c677d;
    }

    @media screen and (min-width: 768px) {   
        width: 100%;
        
    }
`;

export default StyledDataInd;
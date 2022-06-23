import styled from "styled-components";

const Container = styled.div`
    padding: 2rem 2rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

const StyledProvinsi = styled.section`
    max-width: 1200px;
    margin: 0 auto;

    .provinsi__title{
        line-height: 70%;
    }

    h2{
        color: #06D6A0;
        font-size: 40px;
    }

    p{
        color: #118AB2;
        font-size: 20px;
    }

    .provinsi__content {
        overflow-x: auto;
    }

    table{
        margin: 2rem auto;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        max-width: 1000px;
    }

    th{
        color: #118AB2;
    }

    th, td{
        padding: 2rem 0;
        border-color: #118AB2;
        border-style: solid;
        border-width: 1px; 
    }
`;

export default StyledProvinsi;
export {Container};
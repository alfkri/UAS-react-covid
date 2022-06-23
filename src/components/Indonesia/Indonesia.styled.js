import styled from "styled-components";

const Container = styled.div`
    padding: 0rem 2rem;
    font-family: 'Poppins', sans-serif;

    @media screen and (min-width: 992px) {
        max-width: 1200px;
    }
`;

const StyledIndonesia = styled.section`
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .indonesia__title{
        line-height: 70%;
        margin-bottom: 3rem;
    }

    h2{
        font-size: 40px;
        color: #06D6A0;
    }

    p{
        color: #118AB2;
        font-size: 20px;
    }

    .indonesia__container{
        padding: 0 3rem;
        margin-bottom: 6rem;
    }

    img{
        filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        max-width: 80%;
        height: auto;
        width: auto;
    }


    @media screen and (min-width: 768px) {
        .indonesia__container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
            padding: 0 5rem;
        }
    }

`;
export default StyledIndonesia;
export {Container};
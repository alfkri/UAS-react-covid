import styled from "styled-components";

const Container = styled.div`
    margin: 2rem;

    @media screen and (min-width: 768px) {
        margin: 1rem auto;
    }
`;

const StyledFormCovid = styled.section`
    padding: 0 5rem;
    margin-bottom: 5rem;

    .covid__left{
        text-align: center;
    }
    
    img{
        height: auto;
        border-radius: 25px;
        max-width: 300px;
    }

    .covid__form{
        display: flex;
        flex-direction: column;
    }

    h2{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        text-align: center;
        color: #06D6A0;
        font-size: 40px;
    }

    label{
        margin-bottom: 1rem;
        font-weight: 600;
        color: #118AB2;
    }

    select{
        margin-bottom: 1rem;
        padding: 0.7rem 2rem ;
        border-radius: 10px;
    }

    input{
        margin-bottom: 1rem;
        padding: 0.7rem 2rem ;
        border-radius: 10px;
    }

    button{
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #06D6A0;
        color: #fff;
        font-weight: bold;
        width: 100%;  
    }

    @media screen and (min-width: 768px) {
        img{
            max-width: 80%;
        }

        section{
            display: flex;
            flex-direction: row ;
            align-items: center;
        }

        .covid__left{
            flex-basis: 50%;
        
        }

        .covid__right{
            flex-basis: 50%;
        
        }
    }

    @media screen and (min-width: 992px) {
        img{
            max-width: 80%;
        }

        section{
            display: flex;
            flex-direction: row ;
            justify-content: space-between;
        }
    }


`;

export default StyledFormCovid;
export {Container};
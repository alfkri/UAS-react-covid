import styled from "styled-components";

const Container = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: #ffff;   
    font-family: 'Poppins', sans-serif;

    @media screen and (min-width: 768px){
        padding: 0 5rem;
    }


`;

const StyledNavbar = styled.nav`
    h1{
        padding: 1rem;  
    }

    ul{
        list-style: none;
    }

    li{
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px){
        nav{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        ul{
            display: flex;
            flex-direction: row;
        }

        li{
            margin: 0 1rem;
        }
    }
`;

export default StyledNavbar;
export {Container};
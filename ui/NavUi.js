import styled from "styled-components";

const {motion} = require('framer-motion');

export const NavContainer = styled.nav`
    min-height: 15vh;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const NavItems = styled.div`
    display: flex!important;
    justify-content: space-around;
    align-items: center;
    position:relative;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            font-size: 1rem;
            padding: 0.25rem;
        }
        svg{
            font-size: 1.5rem;
            cursor: pointer;
        }
        p{
            cursor: pointer;
        }
    }

`;


export const NavTotal = styled(motion.span)`
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.7rem;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
`;
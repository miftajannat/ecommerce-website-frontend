import styled from "styled-components";

const {motion} = require('framer-motion');

export const CartContainer = styled(motion.section)`
    position:fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

export const CartMenu = styled(motion.div)`
    width: 40%;
    background-color: #f1f1f1;
    padding: 2rem 5rem;
    overflow-x: scroll;
    position: relative;
`;

export const CartCards = styled(motion.div)``;

export const CartCard = styled(motion.span)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    background: white;
    padding: 2rem;
    margin: 2rem 0;
    position:relative;
    img {
        width: 8rem;
    }
`;

export const CardInfo = styled(motion.span)`
    width: 50%;
`;

export const CartEmpty = styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    svg {
        font-size: 10rem!important;
        color: var(--secondary);
    }
    h1 {
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const CartQuantity = styled(motion.span)`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    button {
        background-color: transparent;
        border: none;
        padding: 0.5rem;
    }
    p {
        width: 1rem;
        text-align: center;
    }
    span {
        color: #494949;
    }
    svg {
        color: #494949;
    }
`;

export const CartCheckout = styled(motion.div)`
    width: 100%;
    padding: 0 2rem;
    button {
        background-color: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        margin: 2rem;
        cursor: pointer;
    }
`;

export const CartClose = styled(motion.span)`
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index:500;
    cursor: pointer;
`;
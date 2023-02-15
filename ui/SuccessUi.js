import styled from "styled-components";
import {motion} from 'framer-motion';

export const SuccessContainer = styled.div`
    margin: 5rem 15rem;
`;

export const SuccessCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 2rem;
    padding: 3rem 3rem;
    h1 {
        color: var(--primary);
        margin-bottom: 1rem;
    }
    h2 {
        color: var(--secondary);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    button {
        background: var(--primary);
        color: white;
        font-weight: 500;
        font-size: 1.2rem;
        padding: 1rem 2rem;
        margin-top: 2rem;
        cursor: pointer;
    }
`;
export const SuccessAddress = styled.div`
    font-size: 1rem;
    width: 100%;
`;
export const SuccessOrder = styled.div`
    font-size: 1rem;
    width: 100%;
    div {
        padding-bottom: 1rem;
    }
`;
export const SuccessInfo = styled.div`
    margin-top: 2rem;
    display: flex;
`;
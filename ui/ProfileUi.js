import styled from "styled-components";

export const ProfileOrder = styled.div`
    background: white;
    margin: 2rem 0rem;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 1rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }
    h2 {
        font-size: 1rem;
        color: var(--secondary);
    }
`;

export const ProfileButton = styled.button`
    padding: 1rem;
    border: none;
    background-color: var(--secondary);
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;
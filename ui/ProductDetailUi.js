import styled from "styled-components";

export const ProductContainerUi = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img {
        width: 40%;
    }
`;

export const ProductInfoUi = styled.div`
    width: 40%;
    button {
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`;

export const ProductQuantityUi = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    button {
        background-color: transparent;
        border: none;
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

export const ProductButtonUi = styled.button`
    width: 100%;
    background-color: var(--primary);
    color: white;
    font-weight: bold;
`;
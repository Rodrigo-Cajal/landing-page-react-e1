import styled from 'styled-components';

export const ProductsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 4rem;
    border: solid 2px var(--secondary);
    border-radius: 0.4rem;
    img {
        height: 20rem;
        width: 16rem;
    }
    span {
        padding: 0.5rem;
        font-weight: var(--font-weight-secondary);
    }
`

export const Button = styled.button`
    display: flex;
    padding: 0.7rem;
    color: var(--tertiary);
    background-color: var(--secondary);
    border: none;
    border-radius: 0.4rem;
    font-weight: var(--font-weight-tertiary);
`
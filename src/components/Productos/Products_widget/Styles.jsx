import styled from 'styled-components';

export const ProductsWidgetSection = styled.div`
    background-color: var(--primary);
    color: var(--tertiary);
    h2 {
        font-size: var(--font-size-tertiary);
        padding: 2rem;
    }
`


export const ProductsWidgetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    color: var(--tertiary);
`


export const ProductsWidgets = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
    }
`
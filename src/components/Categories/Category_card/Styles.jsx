import styled from 'styled-components';

export const CategoryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--primary);
    border-radius: 0.4rem;
    padding: 0.3rem;
    margin: 2rem;
    img {
        height: 5rem;
        width: 5rem;
    }
    h2 {
        font-size: var(--font-size-primary);
        font-weight: var(--font-weight-secondary);
    }
`
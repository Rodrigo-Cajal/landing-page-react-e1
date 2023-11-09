import styled from 'styled-components';

export const AboutUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        font-size: var(--font-size-tertiary);
        padding: 2rem;
    }
`

export const AboutUsWidget = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
`

export const AboutUsCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 300px;
        width: 300px;
        border: solid 4px var(--secondary);
    }
`
export const AboutUsSubtitle = styled.div`
    font-weight: var(--font-weight-secondary);
    font-size: var(--font-size-secondary);
    padding-top: 1.5rem;
`
export const AboutUsDescription = styled.div`
    padding: 2rem;
    width: 70%;
`
import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('https://res.cloudinary.com/dkifusffi/image/upload/v1700232048/landing-react/cakd5gebkwdqbc1dx9rm.jpg');
    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
`


export const MainSectionOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 4rem;
    width: 50%;
    color: var(--tertiary);
    span {
        color: var(--secondary);
    }
    @media (max-width: 768px) {
        padding: 1rem;
        width: 85%;
    }
`

export const MainSectionTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    width: 50%;
    img{
        height: 35rem;
    }
`

export const MainButton = styled.button`
    display: flex;
    padding: 0.7rem;
    background-color: var(--secondary);
    border: none;
    border-radius: 0.4rem;
    a {
        font-weight: var(--font-weight-tertiary);
    }
`
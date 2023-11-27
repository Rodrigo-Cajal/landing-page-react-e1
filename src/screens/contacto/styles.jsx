import styled from "styled-components";

export const ContactoSection = styled.div`
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: flex;
  justify-content: center;
  font-size: xx-large;
  padding: 50px 10px;
  font-weight: bolder;
  }
`
export const ContactoContainer = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-bottom: 50px;
`
export const SectionUno = styled.div`
    width: 50%;
  padding-top: 40px;
  padding-right: 140px;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: start;
`
export const SectionDos = styled.div`
    width: 50%;
  padding-left: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    padding-bottom: 30px;
  color: #c71b65;
  }
`
export const FormContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`
export const FormTitle = styled.div`
    margin-bottom: 30px;
  color: #c71b65;
`
export const FormField = styled.div`
    display: flex;
  flex-direction: column;
  text-align: left;
  span {
    padding: 0px 3px;
  font-weight: 500;
  }
`
export const FormInput = styled.div`
    padding: 10px 35px 10px 15px;
  border-radius: 8px;
  background-color: transparent;
  color: #000;
  outline: none;
  border: solid 1px #000;
  width: 350px;
  margin: 5px 0px;
`

export const FormButton = styled.div`
    font-size: 0.9rem;
  background: #9700dc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  width: 350px;
  margin-top: 10px;
`
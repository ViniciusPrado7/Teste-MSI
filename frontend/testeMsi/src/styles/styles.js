import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
export const Titulo = styled.h1`
font-size: 2rem;
color: #000;
`
export const ContainerForms = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: 5rem;
`
export const Formulario = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
gap: 1rem;
border: 1px solid #000;
`
export const ContainerLabelInput = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
`
export const LabelTxt = styled.label`
font-size: 1.3rem;
color: #000;
`
export const InputForm = styled.input`
width: 13rem;
padding: .5rem;
border: 1px solid #000;
border-radius: 8px;
`
export const BtnForm = styled.button`
width: 10rem;
padding: .7rem;
background: #000;
border: 1px solid #000;
border-radius: 12px;
color: #FFF;
cursor: pointer;
transition: 0.3s ease;
    &:hover {
        background: #FFF;
        color: #000;
    }
`
export const StyledError = styled.p`
color: red;
font-size: 1rem;
`
export const StyledSuccess = styled.p`
color: green;
font-size: 1rem;
`
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background: #010606;
background: #DBA800;
overflow-y: scroll;
max-height: 100vh;
min-height: 0vh;
&:: -webkit-scrollbar {
  width: 10px;
  border: 1px solid black;
}

@media screen and (max-width: 768px) {
  height; 1100px;
}

@media screen and (max-width: 480px) {
  height: 1300px;
}
`;

export const Wrapper = styled.div`
max-width: 1000 px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

export const Row = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;


export const BreweryCard = styled.div`
background: #fff;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
border-left: 1px solid #eeeeef;
border-bottom: 1px solid #eeeeef;
border-right: 1px solid #eeeeef;
border-top: 1px solid #eeeeef;
max-height: 340px;
padding: 24px 24px 24px 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

$:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #DBA800;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: enter;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`
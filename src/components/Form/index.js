import React,{ useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import {Header, H2, H3, P} from '../typo';
import Line from '../Line';

const DivStyled = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const FormStyled = styled.form`
width: 100vw;
display: flex;
padding-bottom: 25px;
height: 51px;
width: 90vw;
list-style: none;
`;

const InputStyled = styled.input`
height: 70px;
width: 60vw;
background-color: #101010;
border: none;
color: #fff;
font-size: 16px;
text-decoration: none;
outline: none;

::placeholder {
color: #fff;
/* width: 100vw; */

}
`;

const ButtonStyled = styled.div`
height: 53px;
display: flex;
flex-direction: column;
justify-content: flex-end;

img{
  display: ${props => props.display || 'none' };
  width: 30px;
  height: 30px;
}
`;

const Label = styled.label`
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
height: 80px;
width: 40vw;

`;

const Form = (props) => {
  const [namn, setNamn] = useState('');
  const [showNamn, setShowNamn] = useState('');
  const [yrke, setYrke] = useState('');
  const [showYrke, setShowYrke] = useState("");
  const [mailadress, setMailadress] = useState('');
  const [showMailadress, setShowMailadress] = useState('');
  const [telefon, setTelefon] = useState('');
  const [showTelefon, setShowTelefon] = useState('');

  const setNames = () => {
    setNamn("")
  }
  const setYrkes = () => {
    setYrke("");
  };
  const setMailadresss = () => {
    setMailadress("");
  };
  const setTelefons = () => {
    setTelefon("");
  };


    const inputValue = document.getElementById("userText1");
    const inputValue2 = document.getElementById("userText2");
    const inputValue3 = document.getElementById("userText3");
    const inputValue4 = document.getElementById("userText4");

    useEffect(() => {

    if (!inputValue) {
    } else {
      hideButton(inputValue, setShowNamn);
    }
    if (!inputValue2) {
    } else {
      hideButton(inputValue2, setShowYrke);
    }
    if (!inputValue3) {
    } else {
      hideButton(inputValue3, setShowMailadress);
    }
    if (!inputValue4) {
    } else {
      hideButton(inputValue4, setShowTelefon);
    }

    })

    const hideButton = (a, b) => {
      if (a.value.length >= 1) {
        b("block");
      }else{
        b("none")
      }
    }





    return (
      <DivStyled>
        <FormStyled>
          <Label><P text="Namn"/></Label>
          <InputStyled
            placeholder="Erik Bergstrand"
            value={namn}
            onChange={e => setNamn(e.target.value)}
            type="text"
            id="userText1"
          />
          <ButtonStyled onClick={setNames} display={showNamn}>
            <img src="assets/icons/cancel-1.svg"></img>
          </ButtonStyled>
        </FormStyled>
      <Line />
        <FormStyled>
          <Label><P text="Yrke"/></Label>
          <InputStyled
            placeholder="Kulturakademin"
            value={yrke}
            onChange={e => setYrke(e.target.value)}
            type="text"
            id="userText2"
          />
          <ButtonStyled onClick={setYrkes} display={showYrke}>
            <img src="assets/icons/cancel-1.svg"></img>
          </ButtonStyled>
        </FormStyled>
      <Line />
        <FormStyled>
          <Label><P text="Mailadress"/></Label>
          <InputStyled
            placeholder="erik@kulturakademin.se"
            value={mailadress}
            onChange={e => setMailadress(e.target.value)}
            type="text"
            id="userText3"
          />
          <ButtonStyled onClick={setMailadresss} display={showMailadress}>
            <img src="assets/icons/cancel-1.svg"></img>
          </ButtonStyled>
        </FormStyled>
      <Line />
        <FormStyled>
          <Label><P text="Telefon"/></Label>
          <InputStyled
            placeholder="0739-461928"
            value={telefon}
            onChange={e => setTelefon(e.target.value)}
            type="text"
            id="userText4"
          />
          <ButtonStyled onClick={setTelefons} display={showTelefon}>
            <img src="assets/icons/cancel-1.svg"></img>
          </ButtonStyled>
        </FormStyled>
      <Line />
      </DivStyled>
    );}

export default Form;

import React from "react";
import styled from "styled-components";
import { MdCheck, MdClose } from "react-icons/md";
import PinkBtn from '../mainPinkBtn/mainPinkBtn'
const ModalMM = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MMBody = styled.div`
  overflow-y: auto;
  max-height: 95vh;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  align-items: flex-start;
  & img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0 0 2rem;
    @media screen and (max-width: 650px) {
      margin: 0 0 1.5rem 0;
    }
  }
  @media screen and (max-width: 1050px) {
    width: 85vw;
  }
  @media screen and (max-width: 650px) {
    width: 95vw;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const MMBodyM = styled.div`
  width: 100%;
  background-color: #fff;
  border: 0.25rem solid #000;
  padding: 2.5rem 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
& button 
{
    width: 100%;
    margin: 1.5rem 0 0 0;
}
  & h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: 700;
    font-family: "Teko", "Prompt", sans-serif;
  }
  & div {
    width: 100%;
    & p {
        font-size: 1.5rem;
        margin: 0.5rem 0 0 0;
    }
    & span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.25rem solid #5a5b5a;
      padding: 0 1.5rem;
      margin: 1.5rem 0 0 0;
    }
    & svg {
      font-size: 2.5rem;
      margin: 0 0 0 1.5rem;
    }
    & input {
      width: 100%;
      padding: 1.25rem 0;
      font-size: 1.5rem;
      outline: 0;
      border: 0;
    }
  }
`;
const Check = styled.main`
& svg {
    color: #1DAC24;
}
`;
const Close = styled.main`
& svg {
    color: #B24754;
}
`;
const modalM = () => {
  return (
    <ModalMM>
      <MMBody>
        <MMBodyM>
          <h1>Here comes our form heading...</h1>
          <div>
            <span>
              <input placeholder="Enter Email" type="text" />
              <Check>
              <MdCheck />
              </Check>
            </span>
            <p>This username is unavailable</p>
          </div>
          <div>
            <span>
              <input placeholder="Enter Username" type="text" />
              <Close>
              <MdClose />
              </Close>
            </span>
            <p>This username is unavailable</p>
          </div>
          <PinkBtn text='Claim with Metamask' />
        </MMBodyM>
        <img src="/assets/xm.png" alt="" />
      </MMBody>
    </ModalMM>
  );
};

export default modalM;

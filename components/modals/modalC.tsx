import React from "react";
import styled from "styled-components";
import { MdCheck, MdClose } from "react-icons/md";
import PinkBtn from "../mainPinkBtn/mainPinkBtn";
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
  width: 50vw;
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
    flex-direction: column-reverse;
    align-items: center;
    padding: 1.5rem;
  }
`;
const MMBodyM = styled.div`
  width: 100%;
  background-color: #fff;
  border: 0.25rem solid #000;
  padding: 2.5rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 650px) {
    padding: 1.5rem;
  }
  & h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: 700;
    font-family: "Teko", "Prompt", sans-serif;
      @media screen and (max-width: 650px) {
        line-height: 3.5rem;
        font-size: 3rem;
      }
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
      height: 100%;
      @media screen and (max-width: 650px) {
        margin: 0 0 1.5rem 0;
      }
    }
    & svg {
      font-size: 2.5rem;
      margin: 0 0 0 1.5rem;
    }
    & input {
      width: 100%;
      padding: 0.5rem 0;
      font-size: 1.5rem;
      outline: 0;
      border: 0;
    }
    & textarea {
      width: 100%;
      padding: 0.5rem 0;
      height: 20rem;
      font-size: 1.5rem;
      outline: 0;
      border: 0;
    }
  }
`;
const Check = styled.main`
  & svg {
    color: #1dac24;
  }
`;
const Close = styled.main`
  & svg {
    color: #b24754;
  }
`;
const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3.5rem;
  width: 100%;
  padding: 0 0 1.5rem 0;
  & :nth-child(3) {
    grid-column: 1/-1;
  }
  @media screen and (max-width: 650px)  {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
`;
const modalM = () => {
  return (
    <ModalMM>
      <MMBody>
        <MMBodyM>
          <h1>Here comes our form heading...</h1>
          <Grid>
            <div>
              <span>
                <input placeholder="Name" type="text" />
                <Check>
                  <MdCheck />
                </Check>
              </span>
              {/* <p>This username is unavailable</p> */}
            </div>

            <div>
              <span>
                <input placeholder="Email" type="text" />
                <Check>
                  <MdCheck />
                </Check>
              </span>
              {/* <p>This username is unavailable</p> */}
            </div>

            <div>
              <span>
                <textarea placeholder="Message"></textarea>
                <Check>
                  <MdCheck />
                </Check>
              </span>
              {/* <p>This username is unavailable</p> */}
            </div>
          </Grid>

          <PinkBtn text="Claim with Metamask" />
        </MMBodyM>
        <img src="/assets/xm.png" alt="" />
      </MMBody>
    </ModalMM>
  );
};

export default modalM;

import React from "react";
import styled from "styled-components";
import MainWhiteBtn from "../mainWhiteBtn/mainWhiteBtn";
import MainPinkBtn from "../mainPinkBtn/mainPinkBtn";

  const SubmitYourMeme = styled.div`
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
  const CTBody = styled.div`
    width: 50vw;
    overflow-y: auto;
    max-height: 95vh;
    background-color: #fff;
    border: 0.25rem solid #000;
    border-radius: 1rem;
    @media screen and (max-width: 1050px) {
      width: 85vw;
    }
    @media screen and (max-width: 450px) {
      width: 95vw;
    }
  `;
  const CTHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.75rem 2.5rem;
    position: relative;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
    & img {
      width: 2.5rem;
      height: 2.5rem;
    }
    & h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0;
      font-family: "Teko", "Prompt", sans-serif;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 450px) {
        top: 50%;
        left: 00%;
        transform: translate(1.5rem, -50%);
      }
    }
  `;
  const SYMContainer = styled.div`
    padding: 2.5rem;
    border-top: 0.25rem solid #000;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
  `;
  const Instructions = styled.div`
    & h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      font-family: "Teko", "Prompt", sans-serif;
    }
    & div {
      width: 100%;
      background-color: #3a2fd0;
      padding: 1rem 2rem;
      font-weight: 400;
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      color: #fff;
    }
  `;
  const SYMHead = styled.div`
    margin: 2.5rem 0 0 0;
    & h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      font-family: "Teko", "Prompt", sans-serif;
    }
    & span {
      display: flex;
      width: 100%;
      margin: 1.5rem 0;
      height: 1px;
      background-color: #000;
      opacity: 0.75;
    }
  `;
  const MIContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 450px) {
      flex-direction: column;
    }
  `;
  const MICLeft = styled.div`
    width: 30%;
    @media screen and (max-width: 450px) {
      width: 100%;
    }
    & div {
      border: 0.2rem solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8fafd;
      width: 100%;
      height: 17.5rem;
      & span {
        font-size: 1.25rem;
        border: 0.2rem solid #000;
        border-radius: 0.75rem;
        font-weight: 600;
        padding: 0.75rem 2.5rem;
      }
    }
    & main {
      width: 100%;
      padding: 2rem;
      background-color: #000;
      border-radius: 0 0 1rem 1rem;
      & input {
        border: 0;
        background-color: #000;
        width: 100%;
        font-size: 1.5rem;
        color: #fff;
        &:focus {
          outline: 0;
        }
      }
    }
  `;
  const MICRight = styled.div`
    width: 65%;
    @media screen and (max-width: 450px) {
      width: 100%;
      margin: 2.5rem 0 0 0;
    }
    & h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      font-family: "Teko", "Prompt", sans-serif;
    }
    & textarea {
      max-width: 100%;
      min-width: 100%;
      height: 15rem;
      border-radius: 0;
      border: 0.2rem solid #000;
      padding: 1.5rem;
      font-size: 1.65rem;
    }
  `;
  const SYMInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 5rem;
    margin: 0 0 2.5rem 0;
    @media screen and (max-width: 450px) {
        
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
    }
    & div {
      width: 100%;
      & label {
        font-size: 1.65rem;
        margin: 0 0 0.5rem 0;
      }
      & input {
        width: 100%;
        border: 0.2rem solid #5a5b5a;
        padding: 0.75rem;
        font-size: 1.65rem;
      }
    }
  `;

const SubmitYourMemeS = () => {
  return (
    <>
      <SubmitYourMeme>
        <CTBody>
          <CTHeader>
            <h1>Confirm Transaction</h1>
            <img src="/assets/x.svg" alt="" />
          </CTHeader>
          <SYMContainer>
            <Instructions>
              <h1>Instruction</h1>
              <div>
                Man, on theory, issued western of he always named presented. Are
                design for out use. Uninspired, the textile promptness glanced
                which snapped mathematically right, homeless, expected hard worn
                early be step
              </div>
            </Instructions>
            <SYMHead>
              <h1>Meme Information</h1>
              <span></span>
            </SYMHead>
            <MIContent>
              <MICLeft>
                <div>
                  <span>Upload file</span>
                </div>
                <main>
                  <input type="text" placeholder="Enter meme name here" />
                </main>
              </MICLeft>
              <MICRight>
                <h1>Description</h1>
                <textarea name="" id=""></textarea>
              </MICRight>
            </MIContent>
            <SYMHead>
              <h1>Contact Information</h1>
              <span></span>
            </SYMHead>
            <SYMInput>
              <div>
                <label htmlFor="">User name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">User email</label>
                <input type="text" />
              </div>
            </SYMInput>
            <MainPinkBtn text="Submit Meme" />
          </SYMContainer>
        </CTBody>
      </SubmitYourMeme>
    </>
  );
};

export default SubmitYourMemeS;

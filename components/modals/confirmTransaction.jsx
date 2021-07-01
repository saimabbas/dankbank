import React from "react";
import styled from "styled-components";
import MainWhiteBtn from "../mainWhiteBtn/mainWhiteBtn";
import MainPinkBtn from "../mainPinkBtn/mainPinkBtn";

  const ConfirmTransaction = styled.div`
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
    width: 30vw;
    background-color: #fff;
    border: 0.25rem solid #000;
    border-radius: 1rem;
    
    @media screen and (max-width: 1050px) {
      width: 80vw;
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
  const CTTextDetails = styled.div`
    width: 100%;
    padding: 1rem 5rem;
    border-top: 0.25rem solid #000;
    border-bottom: 0.25rem solid #000;
    & div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1.75rem 0;
      & h1 {
        font-size: 1.65rem;
        color: #3f4040;
        font-weight: 500;
        margin: 0;
      }
      & h2 {
        font-size: 1.65rem;
        font-weight: 700;
        margin: 0;
      }
    }
  `;
  const CTInput = styled.div`
    width: 100%;
    padding: 2.5rem 5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    & input {
      zoom: 1.85;
      border-radius: 0;
      margin: 0 0.5rem 0 0;
    }
    & label {
      width: 100%;
      font-size: 1.65rem;
      font-weight: 400;
      margin: 0;
      & span {
        font-weight: 700;
      }
      & a {
        color: blue;
      }
    }
  `;
  const CTButtons = styled.div`
    width: 100%;
    padding: 2.5rem 5rem;
    & button {
      width: 100%;
      margin: 1.5rem 0;
    }
  `;
const ConfirmTransactionS = () => {

  return (
    <>
      <ConfirmTransaction>
        <CTBody>
          <CTHeader>
            <h1>Confirm Transaction</h1>
            <img src="/assets/x.svg" alt="" />
          </CTHeader>
          <CTTextDetails>
            <div>
              <h1>Fraction Amount</h1>
              <h2>12.03%</h2>
            </div>
            <div>
              <h1>Price</h1>
              <h2>$345.67</h2>
            </div>
            <div>
              <h1>Number of Shares</h1>
              <h2>1.07</h2>
            </div>
          </CTTextDetails>
          <CTInput>
            <input type="checkbox" name="a" id="a" />
            <label htmlFor="a">
              By using <span>Dank Bank</span> you are agreeing to our{" "}
              <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
            </label>
          </CTInput>
          <CTButtons>
            <MainPinkBtn text="Confirm Order" />
            <MainWhiteBtn text="Edit Order" />
          </CTButtons>
        </CTBody>
      </ConfirmTransaction>
    </>
  );
};

export default ConfirmTransactionS;

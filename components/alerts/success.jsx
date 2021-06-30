import React from "react";
import styled from "styled-components";

const Success = () => {
  const Success = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.65);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    & div {
      background-color: #39c68b;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.15rem solid #000;
      padding: 1.5rem 0;
      & p {
        font-size: 1.75rem;
        font-weight: 700;
        color: #fff;
        margin: 0;
      }
      & img {
        width: 1.75rem;
        margin: 0 0 0 2rem;
      }
    }
  `;
  return (
    <>
      <Success>
        <div>
          <p>Transaction complete!</p>
          <img src="/assets/complete.svg" alt="" />
        </div>
      </Success>
    </>
  );
};

export default Success;

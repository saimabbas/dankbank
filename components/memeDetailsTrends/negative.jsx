import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import styled from "styled-components";

  const Negative = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 1.5rem 0.25rem 0.5rem;
    background-color: #ffbdb4;
    color: #be543c;
    font-size: 1.35rem;
    font-weight: 600;
    border-radius: 100px;
    width: max-content;
    & svg {
      font-size: 2.5rem;
    }
    & p {
      margin: 0;
    }
  `;
const negative = () => {

  return (
    <Negative>
      <MdArrowDropUp />
      <p> 1.5%</p>
    </Negative>
  );
};

export default negative;

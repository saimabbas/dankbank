import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import styled from "styled-components";

  const Positive = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 1.5rem 0.25rem 0.5rem;
    background-color: #d3e9dc;
    color: #27ae60;
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
const positive = () => {

  return (
    <Positive>
      <MdArrowDropUp /> <p> 1.5%</p>
    </Positive>
  );
};

export default positive;

import React, { FC } from "react";
import styled from "styled-components";
interface BioProps {
  text: string;
}

let MainPinkBtn = styled.button`
  border: 0.2rem solid #000;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 1.1rem 2rem;
  font-weight: 600;
  color: #000;
  background-color: var(--mainpink);
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 0 0 var(--purplishblue);
  &:focus {
    box-shadow: 0 0 0 0 var(--purplishblue);
  }
`;
const mainPinkBtn: FC<BioProps> = (props): JSX.Element => {
  return <MainPinkBtn>{props.text}</MainPinkBtn>;
};

export default mainPinkBtn;

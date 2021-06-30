import React, { FC } from "react";
import styled from "styled-components";
interface BioProps {
  text: string;
}

let MainWhiteBtn = styled.button`
  border: 0.2rem solid #000;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 1.1rem 3rem;
  background-color: #fff;
  margin: 0 2rem 0 0;
  font-weight: 600;
  color: #000;
  @media screen and (max-width: 1024px) {
    padding: 1.1rem 2rem;
  }
`;
const mainWhiteBtn: FC<BioProps> = (props): JSX.Element => {
  return <MainWhiteBtn>{props.text}</MainWhiteBtn>;
};

export default mainWhiteBtn;

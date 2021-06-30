import React, { FC } from "react";
import styled from "styled-components";

interface BioProps {
  lordImg: string;
  lordPosition: string;
  lordName: string;
}
const MemeLords: FC<BioProps> = (props): JSX.Element => {
  const GcImg = styled.div`
    & img {
      width: 100%;
      border: 0.3rem solid #000;
      object-fit: cover;
      margin: 1rem 0 0 0;
      aspect-ratio: 1 1;
    }
  `;
  const GcFooter = styled.div`
    background-color: #000;
    border-radius: 0 0 1.25rem 1.25rem;
    padding: 1.25rem 2.5rem 2.5rem 2.5rem;
    transform: translate(0, -5px);
    & p {
      font-size: 1.75rem;
      color: #e2dede;
      font-weight: 700;
      text-align: center;
      margin: 0.75rem 0;
    }
    & h6 {
      font-size: 1.75rem;
      color: #ffffff;
      opacity: 0.4;
      text-align: center;
      margin: 0.75rem 0;
    }
  `;
  const HomeGridCard = styled.div`
    cursor: pointer;
    width: 30%;
    margin: 5rem 0 0 0;
    @media screen and (max-width: 1024px) {
      width: 45%;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
    &:last-child {
      margin: 5rem auto 0 auto;
      @media screen and (max-width: 1024px) {
        margin: 5rem 0 0 0;
      }
    }
  `;
  return (
    <HomeGridCard>
      <GcImg>
        <img src={props.lordImg} alt="" />
      </GcImg>
      <GcFooter>
        <p>{props.lordName}</p>
        <h6>{props.lordPosition}</h6>
      </GcFooter>
    </HomeGridCard>
  );
};

export default MemeLords;

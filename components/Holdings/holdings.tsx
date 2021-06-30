import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

interface BioProps {
  memeName: string;
  memeKnow: string;
  memeImg: string;
  memePrice: string;
  memeMarketCap: string;
}
const Holdings: FC<BioProps> = (props): JSX.Element => {
  const GcHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & h1 {
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    & img {
      width: 9rem;
    }
  `;

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
    padding: 1rem 2.5rem;
    transform: translate(0, -5px);
    & h3 
    {
        margin: 1.75rem 0 1.5rem 0;
        font-size: 1.75rem;
        color: #fff;
        opacity: 0.4;
    }
    & p {
      font-size: 1.75rem;
      color: #e2dede;
      margin: 0.75rem 0;
      & span {
        font-weight: 600;
        color: #fff;
      }
    }
  `;
  const HomeGridCard = styled.div`
  cursor: pointer;
  `
  return (
      <HomeGridCard>
        <GcHead>
          <h1>$ {props.memeName}</h1>
        </GcHead>
        <GcImg>
          <img src={props.memeImg} alt="" />
        </GcImg>
        <GcFooter>
          <p>
            Price: <span>${props.memePrice}</span>
          </p>
          <p>
            Market Cap: <span>${props.memeMarketCap}</span>
          </p>
          <h3>{props.memeKnow}</h3>
        </GcFooter>
      </HomeGridCard>
  );
};

export default Holdings;

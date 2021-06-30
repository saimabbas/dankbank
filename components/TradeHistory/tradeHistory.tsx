import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

interface BioProps {
  thName: string;
  thTime: string;
  ETH: string;
  thprice: string;
}
const TradeHistory: FC<BioProps> = (props): JSX.Element => {
  const TradeHistoryCard = styled.div`
    width: 100%;
    border: 0.35rem solid #000;
    padding: 1rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2.5rem 0;
    box-shadow: 0.5rem 0.5rem 0 0 var(--mainblue);
    @media screen and (max-width: 450px) {
flex-direction: column;
align-items: flex-end;
padding: 1rem 1.5rem;
    }
  `;
  const THCLeft = styled.div`
    display: flex;
    align-items: center;
    & img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 0 1.5rem 0 0;
    }
    & main h2 {
      font-size: 1.5rem;
      font-weight: 500;
      & span {
        opacity: 0.75;
      }
    }
    & h3 {
      font-size: 1.5rem;
      color: #6f7070;
    }
  `;
  const THCRight = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 450px) {
      width: 72.5%;
      justify-content: space-between;
      margin: 1.5rem 0 0 0;
    }
    & img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: contain;
      margin: 0 0 0 1.5rem;
    }
    & main {
      & h3 {
        font-size: 1.5rem;
        font-weight: 800;
      }
      & h4 {
        font-size: 1.5rem;
        color: #6f7070;
      }
    }
  `;
  return (
    <TradeHistoryCard>
      <THCLeft>
        <img src="/assets/pepe.png" alt="" />
        <main>
          <h2>
            Bid placed by <span>@{props.thName}</span>
          </h2>
          <h3>{props.thTime}</h3>
        </main>
      </THCLeft>
      <THCRight>
        <main>
          <h3>{props.ETH} ETH</h3>
          <h4>${props.thprice}</h4>
        </main>
        <img src="/assets/go.png" alt="" />
      </THCRight>
    </TradeHistoryCard>
  );
};

export default TradeHistory;

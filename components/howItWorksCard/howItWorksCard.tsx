import React, { FC } from "react";
import styled from "styled-components";
interface BioProps {
  hiwImg: string;
  hiwHeading: string;
  hiwText: string;
}
const HiwCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3333%;
  @media screen and (max-width: 1024px) {
    width: 50% !important;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 450px) {
    width: 100% !important;
    margin-bottom: 5rem;
  }
  & img {
    width: 12.5rem;
    height: 12.5rem;
  }
  & h2 {
    font-size: 3.5rem;
    margin: 2.5rem 0;
  }
  & p {
    font-size: 1.75rem;
    text-align: center;
    width: 90%;
  }
`;
const howItWorksCard: FC<BioProps> = (props): JSX.Element => {
  return (
    <HiwCard>
      <img src={props.hiwImg} alt="" />
      <h2>{props.hiwHeading}</h2>
      <p>{props.hiwText}</p>
    </HiwCard>
  );
};

export default howItWorksCard;

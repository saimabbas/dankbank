import React, { FunctionComponent } from "react";
import Header from "../components/header/header";
import Head from "next/head";
import HoldingsCard from "../components/Holdings/holdings";
import HowItWorksCard from "../components/howItWorksCard/howItWorksCard";
import Footer from "../components/footer/footer";
import GlobalStyle from "../theme/globalStyles";
import styled from "styled-components";
import TradeHistoryCard from "../components/TradeHistory/tradeHistory";
const User = () => {
  const HeroSection = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.5rem;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
    @media screen and (max-width: 1024px) {
      height: unset;
    }
  `;
  const HeroSectionBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 0.5rem solid #000;
    padding: 2.5rem;
    background-image: url("../../assets/Lines.png");
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
      border: 0.35rem solid #000;
    }
  `;
  const HeroBoxContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    @media screen and (max-width: 1024px) {
      margin: 5rem 0 0 0;
      align-items: flex-start;
    }
    @media screen and (max-width: 450px) {
      flex-direction: column-reverse;
      margin: 0;
    }
  `;
  const HeroContentLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 3rem 0 3rem 4rem;
    @media screen and (max-width: 1024px) {
      padding: 3rem 0 3rem 0rem;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      align-items: center;
      padding: 0rem 0 2rem 0rem;
    }
    & h1 {
      font-size: 8.5rem;
      font-weight: 800;
      margin: 0;
      text-transform: uppercase;
      line-height: 7.5rem;
      font-family: "Teko", "Prompt", sans-serif;
      @media screen and (max-width: 1024px) {
        font-size: 6.25rem;
        line-height: 6.5rem;
      }
      @media screen and (max-width: 450px) {
        font-size: 5rem;
        line-height: 5rem;
        text-align: center;
      }
    }
  `;
  const HeroContentRightDotted = styled.button`
    padding: 1.25rem 5rem;
    border: 0.2rem solid #000;
    font-size: 1.5rem;
    border-radius: 1rem;
    font-weight: 600;
    color: #000;
    background-color: var(--mainpink);
    color: #fff;
    cursor: pointer;
    box-shadow: 0.5rem 0.5rem 0 0 var(--purplishblue);
    & :focus {
      box-shadow: 0 0 0 0 var(--purplishblue);
    }
    & span {
      position: relative;
    }
    & ::before {
      content: "•";
      font-size: 2rem;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-350%, -50%);
      color: #000;
    }
    & ::after {
      content: "•";
      font-size: 2rem;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(350%, -50%);
      color: #000;
    }
  `;
  const HomeCardsSection = styled.div`
    width: 100%;
    padding: 3.5rem;
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
  `;
  const HomeCardsConainer = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    width: 100%;
    border: 0.5rem solid #000;
    @media screen and (max-width: 450px) {
      border: 0.35rem solid #000;
    }
  `;
  const HomeCSHeader = styled.div`
    width: 100%;
    padding: 5rem;
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
    }
  `;
  const HomeCSGrigContainer = styled.div`
    padding: 5rem;
    @media screen and (max-width: 1050px) {
      padding: 5rem 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 5rem 2rem;
    }
  `;
  const HomeGridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 4rem 7.5rem;
    @media screen and (max-width: 1050px) {
      grid-gap: 4rem 2.5rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  `;
  const HomeSeeAll = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 8.5rem 0;
    @media screen and (max-width: 450px) {
      margin: 0 0 5rem 0;
    }
    & button {
      padding: 1.25rem 5rem;
      border: 0.2rem solid #000;
      font-size: 1.5rem;
      border-radius: 1rem;
      font-weight: 600;
      color: #000;
      background-color: var(--mainpink);
      color: #fff;
      box-shadow: 0.5rem 0.5rem 0 0 var(--purplishblue);
      & span {
        position: relative;
        & ::before {
          content: "•";
          font-size: 2rem;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-350%, -50%);
          color: #000;
        }
        & ::after {
          content: "•";
          font-size: 2rem;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(350%, -50%);
          color: #000;
        }
      }
    }
  `;
  const HowitWorksContainer = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    width: 100%;
    & h1 {
      font-size: 6.5rem;
      text-align: center;
      font-family: "Teko", "Prompt", sans-serif;
      margin: 3.5rem 0;
      @media screen and (max-width: 450px) {
        font-size: 4.5rem;
        margin: 0.5rem 0 0 0;
      }
    }
  `;
  const HitPCP = styled.p`
    font-size: 2rem;
    text-align: center;
    display: block;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  `;
  const HitPCT = styled.p`
    font-size: 2rem;
    text-align: center;
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
    @media screen and (max-width: 450px) {
      font-size: 1.75rem;
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
  `;
  const HiwBox = styled.div`
    width: 100%;
    margin: 10rem 0;
    display: flex;
    align-items: flex-start;
    padding: 0 7.5%;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      margin: 5rem 0;
    }
  `;
  const HeaderBox = styled.div`
    padding: 5rem;
    width: 100%;
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
  `;
  const UserLeft = styled.div`
    border: 0.5rem solid #000;
    padding: 1.5rem;
    background-color: #fff;
    margin: 0 5rem 0 0;
    @media screen and (max-width: 1050px) {
      margin: 0 2.5rem 0 0;
      padding: 0.75rem;
    }
    & img {
      width: 35rem;
      height: 35rem;
      @media screen and (max-width: 1050px) {
        width: 20rem;
        height: 20rem;
      }
    }
  `;
  const UserRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 450px) {
      margin: 2.5rem 0 0 0;
      align-items: center;
    }
    & p {
      font-size: 1.75rem;
      font-weight: 500;
      width: 90%;
      margin: 1.5rem 0 0 0;
      @media screen and (max-width: 1050px) {
        width: 100%;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
        text-align: center;
        margin: 2.5rem 0 0 0;
      }
    }
    & h1 {
      margin: 0;
    }
    & main {
      display: flex;
      margin: 2.5rem 0;
      @media screen and (max-width: 1050px) {
        margin: 1.5rem 0;
      }
      @media screen and (max-width: 450px) {
        margin: 3.5rem 0;
      }
      & img {
        width: 5rem;
        height: 5rem;
        box-shadow: 0.35rem 0.35rem 0 0 var(--purplishblue);
        border-radius: 50%;
        margin: 0 1.75rem 0 0;
        @media screen and (max-width: 1050px) {
          width: 3.5rem;
          height: 3.5rem;
        }
      }
    }
  `;
  const UserH = styled.h2`
    font-size: 4rem;
    font-weight: 900;
    margin: 0 0 5rem 0;
    font-family: "Teko", "Prompt", sans-serif;
    @media screen and (max-width: 1050px) {
      margin: 0;
    }
  `;
  let MainWhiteBtn = styled.button`
    border: 0.2rem solid #000;
    font-size: 1.5rem;
    border-radius: 1rem;
    padding: 1rem 5rem;
    background-color: #fff;
    margin: 0 2rem 0 0;
    font-weight: 600;
    color: #000;
    @media screen and (max-width: 1024px) {
      padding: 1rem 5rem;
    }
  `;
  const WalletBox = styled.div`
    width: 100%;
    padding: 0 5rem 10rem 5rem;
    border-bottom: 0.35rem solid #000;
    @media screen and (max-width: 1024px) {
      padding: 2.5rem 2.5rem 5rem 2.5rem;
    }
    & div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0.25rem solid #000;
      padding: 1.5rem 2.5rem;
      box-shadow: 0.5rem 0.5rem 0 0 var(--mainblue);
      margin: 5rem 0 0 0;
      @media screen and (max-width: 1024px) {
        margin: 2.5rem 0 0 0;
        padding: 1rem 1.5rem;
      }
      & p {
        font-size: 1.75rem;
        font-weight: 500;
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      & img {
        width: 3rem;
        height: 3rem;
        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }
  `;
  const Holdings = styled.div`
    & main {
      margin: 10rem 0 0 5rem;
      @media screen and (max-width: 1024px) {
        margin: 5rem 0 0 2.5rem;
      }
    }
  `;
  const TradeHistory = styled.div`
    padding: 10rem 5rem;
    @media screen and (max-width: 1024px) {
      padding: 0 2.5rem 5rem 2.5rem;
    }
  `;

  const TradeHistoryBox = styled.div`
    margin: 2.5rem 0 0 0;
    width: 100%;
    height: 50rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 2.5rem;
    &::-webkit-scrollbar {
      width: 0.75rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      border: 1px solid #000;
      background-color: var(--mainpink);
    }
    &::-webkit-scrollbar-track {
      border: 1px solid #000;
      border-radius: 100px;
      background-color: #c3c4d3;
    }
  `;
  return (
    <div className="home">
      <Head>
        <title>User Account</title>
      </Head>
      <HomeCardsSection>
        <HomeCardsConainer>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <HomeCSHeader>
            <UserLeft>
              <div>
                <img src="/assets/pepe.png" alt="" />
              </div>
            </UserLeft>
            <UserRight>
              <span>
                <UserH>Italio Beisto</UserH>
              </span>
              <p>
                Here comes BIO text... pensamientos que, el nómina trabajar,
                presentará de año, quien foto del teniendo todo los de durante
                que era que década, se del toros financiera sí en cuarenta a
                dice debería.
              </p>
              <main>
                <img src="/assets/1.svg" alt="" />
                <img src="/assets/1.svg" alt="" />
                <img src="/assets/1.svg" alt="" />
                <img src="/assets/1.svg" alt="" />
                <img src="/assets/1.svg" alt="" />
              </main>
              <MainWhiteBtn>Edit Profile</MainWhiteBtn>
            </UserRight>
          </HomeCSHeader>
          <WalletBox>
            <UserH>My Wallet</UserH>
            <div>
              <p>
                0xb4d2310a5e504ac0b3462789b027f8327f0f070d08fc9fd958fb8167b58a5f2ed401cc2
              </p>
              <img src="/assets/copy.png" alt="" />
            </div>
          </WalletBox>
          <Holdings>
            <main>
              <UserH>Holdings</UserH>
            </main>
            <HomeCSGrigContainer>
              <HomeGridBox>
                <HoldingsCard
                  memeName="pepe"
                  memeImg="/assets/pepe.png"
                  memePrice="42.11"
                  memeMarketCap="229,129"
                  memeKnow="#You own 5% for this meme"
                />
                <HoldingsCard
                  memeName="pepe"
                  memeImg="/assets/pepe.png"
                  memePrice="42.11"
                  memeMarketCap="229,129"
                  memeKnow="#You own 5% for this meme"
                />
                <HoldingsCard
                  memeName="chill"
                  memeImg="/assets/chill.png"
                  memePrice="42.11"
                  memeMarketCap="229,129"
                  memeKnow="#You own 5% for this meme"
                />
              </HomeGridBox>
            </HomeCSGrigContainer>
            <HomeSeeAll>
              <HeroContentRightDotted>
                <span>See More</span>
              </HeroContentRightDotted>
            </HomeSeeAll>
          </Holdings>
          <TradeHistory>
            <UserH>Trade History</UserH>
            <TradeHistoryBox>
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
              <TradeHistoryCard
                thName="halarvaiasu"
                thTime="April 18, 2021 at 5:46 pm"
                ETH="4.444"
                thprice="5394.98"
              />
            </TradeHistoryBox>
          </TradeHistory>
        </HomeCardsConainer>
      </HomeCardsSection>

      <Footer />
    </div>
  );
};

export default User;

import React, { FunctionComponent } from "react";
import Header from "../components/header/header";
import Head from "next/head";
import HomeGridCard from "../components/homeGridCard/homeGridCard";
import HowItWorksCard from "../components/howItWorksCard/howItWorksCard";
import Footer from "../components/footer/footer";
import styled from "styled-components";

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
    border-bottom: 0.2rem solid #000;
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
      border-bottom: 0.35rem solid #000;
    }
    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 0.35rem solid #000;
    }
  `;
  const HomeCSHeaderLeft = styled.div`
    width: 65%;
    @media screen and (max-width: 450px) {
      width: 100%;
    }
    & h1 {
      font-size: 5rem;
      margin: 0 0 0.5rem 0;
      font-family: "Teko", "Prompt", sans-serif;
    }
    & p {
      font-size: 1.75rem;
    }
  `;
  const HomeCSHeaderRight = styled.div`
    width: 35%;
    @media screen and (max-width: 450px) {
      width: 100%;
    }
    & h1 {
      font-size: 3.5rem;
      margin: 0 0 3rem 0;
      @media screen and (max-width: 450px) {
        font-size: 2.5rem;
        margin: 2.5rem 0 0 0;
      }
    }
    & select {
      width: 100%;
      padding: 1rem 0rem;
      font-size: 1.5rem;
      border: 0 solid white;
      border-bottom: 0.2rem solid #000;
      background-color: #fff;
      @media screen and (max-width: 450px) {
        width: 100%;
        margin: 0 0 2.5rem 0;
      }
    }
  `;
  const HomeCSGrigContainer = styled.div`
    padding: 5rem;
    @media screen and (max-width: 450px) {
      padding: 5rem 2rem;
    }
    @media screen and (max-width: 1050px) {
      padding: 5rem 2.5rem;
    }
  `;
  const HomeGridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 4rem 7.5rem;
    @media screen and (max-width: 1024px) {
    grid-gap: 4rem 2.5rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
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
    @media screen and (max-width: 1050px) {
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
        margin: 1.5rem 0 0 0;
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
const Home = () => {

  return (
    <div className="home">
      <Head>
        <title>Market</title>
      </Head>
      <HomeCardsSection>
        <HomeCardsConainer>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <HomeCSHeader>
            <HomeCSHeaderLeft>
              <h1>Meme List</h1>
              <p>Click on a meme to trade or learn more</p>
            </HomeCSHeaderLeft>
            <HomeCSHeaderRight>
              <h1>Sort By</h1>
              <select name="" id="">
                <option value="">Volume</option>
                <option value="">Volume</option>
                <option value="">Volume</option>
              </select>
            </HomeCSHeaderRight>
          </HomeCSHeader>
          <HomeCSGrigContainer>
            <HomeGridBox>
              <HomeGridCard
                memeName="pepe"
                memeTag="/assets/newTag.png"
                memeImg="/assets/pepe.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="chill"
                memeTag="/assets/newTag.png"
                memeImg="/assets/chill.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="hola"
                memeTag="/assets/trendingTag.png"
                memeImg="/assets/hola.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="beautiful"
                memeTag="/assets/newTag.png"
                memeImg="/assets/beautiful.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="mona"
                memeTag="/assets/newTag.png"
                memeImg="/assets/mona.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="drunk"
                memeTag="/assets/newTag.png"
                memeImg="/assets/drunk.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="chilling"
                memeTag="/assets/newTag.png"
                memeImg="/assets/chill.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="dank"
                memeTag="/assets/newTag.png"
                memeImg="/assets/dank.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
              <HomeGridCard
                memeName="what"
                memeTag="/assets/newTag.png"
                memeImg="/assets/what.png"
                memePrice="42.11"
                memeMarketCap="229,129"
              />
            </HomeGridBox>
          </HomeCSGrigContainer>
          <HomeSeeAll>
            <HeroContentRightDotted>
              <span>See More</span>
            </HeroContentRightDotted>
          </HomeSeeAll>
        </HomeCardsConainer>
      </HomeCardsSection>
      <HowitWorksContainer>
        <h1>How it works</h1>
        <HitPCP>Go from sad to chad in these three simple steps</HitPCP>
        <HitPCT>
          Seal live a made never blonde a invitation a the refute. I by makers
          math were we would have size.
        </HitPCT>
        <HiwBox>
          <HowItWorksCard
            hiwImg="/assets/signIn.png"
            hiwHeading="Sign In"
            hiwText="Create your account by clicking “connect wallet” and signing into your Metamask"
          />
          <HowItWorksCard
            hiwImg="/assets/trade.png"
            hiwHeading="Trade"
            hiwText="Buy shares of your favorite memes, videos, or other internet artifacts"
          />
          <HowItWorksCard
            hiwImg="/assets/profit.png"
            hiwHeading="Profit"
            hiwText="What's that? Your memes have gone up in value? Wow! Sell them or something."
          />
        </HiwBox>
      </HowitWorksContainer>

      <Footer />
    </div>
  );
};

export default Home;

import React, { FunctionComponent } from "react";
import Header from "../components/header/header";
import HomeGridCard from "../components/homeGridCard/homeGridCard";
import HowItWorksCard from "../components/howItWorksCard/howItWorksCard";
import Footer from "../components/footer/footer";
import GlobalStyle from "../theme/globalStyles";
import styled from "styled-components";
const Home = () => {
  const HeroSection = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: var(--mainblue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.5rem;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
    @media screen and (max-width: 1024px) {
      height: unset;
      padding: 2.5rem;
    }
  `;

  const HeroSectionBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 0.5rem solid #000;
    padding: 5rem;
    background-image: url("../../assets/Lines.png");
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
      border: 0.35rem solid #000;
    }
    @media screen and (max-width: 1024px) {
      padding: 2.5rem;
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
    @media screen and (max-width: 650px) {
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
    @media screen and (max-width: 650px) {
      width: 100%;
      align-items: center;
      padding: 0rem 0 2rem 0rem;
    }
    & h1 {
      font-size: 7.5rem;
      font-weight: 800;
      margin: 0;
      text-transform: uppercase;
      line-height: 7.5rem;
      font-family: "Teko", "Prompt", sans-serif;
      @media screen and (max-width: 1024px) {
        font-size: 6.25rem;
        line-height: 6.5rem;
      }
      @media screen and (max-width: 650px) {
        font-size: 5rem;
        line-height: 5rem;
        text-align: center;
      }
    }
  `;
  const HeroContentRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 650px) {
      width: 100%;
    }
    & img {
      width: 45rem;
      height: 45rem;
      @media screen and (max-width: 1024px) {
        width: 32.5rem;
        height: 32.5rem;
        margin: 3.5rem 0 0 0;
      }
      @media screen and (max-width: 450px) {
        width: 30rem;
        height: 30rem;
        margin: 0;
      }
    }
  `;
  const TabletHeaderP = styled.div`
    display: none;
    font-size: 2rem;
    font-weight: 500;
    width: 80%;
    margin: 2rem 0;
    @media screen and (max-width: 1024px) {
      display: flex;
      width: 100%;
      margin: 5rem 0;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      margin: 2.5rem 0;
      font-size: 1.75rem;
      text-align: center;
    }
  `;
  const PCHeaderP = styled.div`
    display: block;
    font-size: 2rem;
    font-weight: 500;
    width: 80%;
    margin: 2rem 0;
    @media screen and (max-width: 1024px) {
      display: none;
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
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
    }
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
  `;
  const HomeCardsConainer = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    width: 100%;
    border: 0.25rem solid #000;
  `;

  const HomeCSHeader = styled.div`
    width: 100%;
    padding: 5rem;
    display: flex;
    align-items: flex-start;
    border-bottom: 0.25rem solid #000;
    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
    }
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
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
      width: 80%;
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
    grid-template-rows: auto;
    grid-gap: 4rem 7.5rem;
    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 2.5rem;
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
  return (
    <div className="home">
      <HeroSection>
        <HeroSectionBox>
          <Header />
          <HeroBoxContent>
            <HeroContentLeft>
              <h1>
                Welcome <br /> to the meme <br /> economy
              </h1>
              <PCHeaderP>
                Trade iconic moments in internet history. Be the envy of your
                internet friends.
              </PCHeaderP>
              <TabletHeaderP>
                Buy and sell fractional shares of memes and other cultural
                artifacts. Be the envy of your internet friends 😈
              </TabletHeaderP>
              <HeroContentRightDotted>
                <span>Place a Bid</span>
              </HeroContentRightDotted>
            </HeroContentLeft>
            <HeroContentRight>
              <img src="/assets/heroImg.svg" alt="" />
            </HeroContentRight>
          </HeroBoxContent>
        </HeroSectionBox>
      </HeroSection>
      <HomeCardsSection>
        <HomeCardsConainer>
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

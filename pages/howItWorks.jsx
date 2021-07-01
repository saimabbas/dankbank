import React, { FunctionComponent } from "react";
import Header from "../components/header/header";
import Head from "next/head";
import HomeGridCard from "../components/homeGridCard/homeGridCard";
import HowItWorksCard from "../components/howItWorksCard/howItWorksCard";
import Footer from "../components/footer/footer";
import GlobalStyle from "../theme/globalStyles";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import MemeLord from "../components/memeLords/memeLords";
  const HeroSection = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: var(--mainblue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.5rem 3.5rem 20rem 3.5rem;
    @media screen and (max-width: 1024px) {
      height: unset;
    padding: 2.5rem 2.5rem 20rem 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 1.5rem 1.5rem 10rem 1.5rem;
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
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 1.5rem;
      border: 0.35rem solid #000;
    }
  `;
  const HeroBoxContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
      font-size: 7rem;
      font-weight: 900;
      font-family: "Teko", "Prompt", sans-serif;
      margin: 5rem 0;
      @media screen and (max-width: 450px) {
        margin: 2.5rem 0;
        font-size: 3.5rem;
      }
    }
    & p {
      font-size: 1.75rem;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      font-weight: 500;
    }
    @media screen and (max-width: 1024px) {
      margin: 5rem 0 0 0;
    }
    @media screen and (max-width: 450px) {
      margin: 0;
    }
  `;
  const AboutPP = styled.div`
    display: block;
    font-size: 1.5rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    font-weight: 500;
    & span {
      font-weight: 700;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  `;
  const AboutTP = styled.div`
    display: none;
    font-size: 1.5rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-weight: 500;
  `;
  const VideoBox = styled.div`
    width: 100%;
    display: flex;
    padding: 1.75rem;
    border: 0.5rem solid #000;
    position: relative;
    transform: translate(0, 15rem);
    background-color: #fff;
    cursor: pointer;
    height: 50rem;
    box-shadow: 1rem 1rem 0 0 var(--mainpink);
    @media screen and (max-width: 1024px) {
      height: 30rem;
      transform: translate(0, 12.5rem);
    }
    @media screen and (max-width: 450px) {
      height: 20rem;
      transform: translate(0, 7.5rem);
      padding: 1rem;
      box-shadow: 0.75rem 0.75rem 0 0 var(--mainpink);
    }
    & img {
      width: 100%;
      object-fit: cover;
    }
    & span {
      width: 6rem;
      height: 6rem;
      font-size: 2rem;
      background-color: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;
  const HIWcontainer = styled.div`
    padding: 5rem;
    width: 100%;
    @media screen and (max-width: 1050px) {
      padding: 2.5rem;
    }
  `;
  const HIWBox = styled.div`
    border: 0.35rem solid #000;
    padding: 5rem 3.5rem;
    @media screen and (max-width: 1050px) {
      padding: 5rem 2.5rem;
    }
    @media screen and (max-width: 450px) {
      padding: 2.5rem;
    }
  `;
  const HIWBoxH = styled.div`
    font-size: 6rem;
    font-weight: 900;
    font-family: "Teko", "Prompt", sans-serif;
    text-align: center;
    @media screen and (max-width: 450px) {
      font-size: 3.5rem;
    }
  `;
  const ThreeBoxContainer = styled.div`
    padding: 5rem 10%;
    @media screen and (max-width: 1024px) {
      padding: 5rem 0;
    }
    & div {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 5rem 0 0 0;
      @media screen and (max-width: 450px) {
        flex-direction: column;
        &:nth-child(2) {
            flex-direction: column-reverse;
        }
      }
      & main {
        width: 50%;
        display: flex;
        @media screen and (max-width: 450px) {
          width: 100%;
          justify-content: center;
        }
        &:nth-child(2) {
          justify-content: flex-end;
          @media screen and (max-width: 450px){
              justify-content: center;
          }
        }
        & img {
          width: 30rem;
          height: 30rem;
          object-fit: contain;
          @media screen and (max-width: 1024px) {
            width: 20rem;
            height: 20rem;
          }
          @media screen and (max-width: 450px) {
            width: 15rem;
            height: 15rem;
            margin: 0 0 2.5rem 0;
          }
        }
      }
      & span {
        display: flex;
        flex-direction: column;
        width: 50%;
        @media screen and (max-width: 450px) {
          width: 100%;
          text-align: center;
        }
        & h2 {
          font-size: 2.75rem;
          font-weight: 900;
          margin: 0 0 1rem 0;
          font-family: "Teko", "Prompt", sans-serif;
        }
        & p {
          font-size: 1.75rem;
          font-weight: 500;
        }
      }
    }
  `;
  const MemeLordsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const ContactBox = styled.div`
    width: 100%;
    margin: 10rem auto 5rem auto;
    border: 0.35rem solid #000;
    padding: 5rem 0 0 0;
    @media screen and (max-width: 1024px) {
      margin: 10rem auto 0 auto;
    }
    @media screen and (max-width: 450px) {
      margin: 10rem auto 0 auto;
      border: 0;
      padding: 0;
    }
  `;
  const ContactInputBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    grid-gap: 5rem;
    padding: 10rem 5rem 5rem 5rem;
    @media screen and (max-width: 1024px) {
      padding: 5rem 2.5rem 2.5rem 2.5rem;
      grid-gap: 2.5rem;
      grid-template-columns: 1fr ;
    grid-template-rows: 1fr 1fr 3fr;
    }
    @media screen and (max-width: 1024px) {
      padding: 2.5rem 0;
      grid-gap: 2.5rem;
    }
    & div {
      width: 100%;
      &:nth-child(3) {
        grid-column: 1/-1;
      }
      & input {
        width: 100%;
        padding: 1.5rem;
        border: 0.2rem solid #5a5b5a;
        font-size: 1.75rem;
        @media screen and (max-width: 1024px) {
          padding: 1rem;
        }
      }
      & textarea {
        width: 100%;
        padding: 1.5rem;
        border: 0.2rem solid #5a5b5a;
        font-size: 1.75rem;
        height: 100%;
        @media screen and (max-width: 1024px) {
          padding: 1rem;
        }
      }
    }
  `;
  const HeroContentRightDotted = styled.button`
    padding: 1.25rem 5rem;
    margin: 0 0 7.5rem 5rem;
    border: 0.2rem solid #000;
    font-size: 1.5rem;
    border-radius: 1rem;
    font-weight: 600;
    color: #000;
    background-color: var(--mainpink);
    color: #fff;
    cursor: pointer;
    box-shadow: 0.5rem 0.5rem 0 0 var(--purplishblue);
    @media screen and (max-width: 1024px) {
      margin: 0 0 5rem 3.5rem;
    }
    @media screen and (max-width: 450px) {
      margin: 0 0 5rem 0rem;
    }
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
const Home = () => {

  return (
    <div className="home">
      <Head>How it works</Head>
      <HeroSection>
        <HeroSectionBox>
          <Header />
          <HeroBoxContent>
            <h1>ABOUT US</h1>
            <AboutPP>
              Oh the humble meme. For many years bright minds have tried and
              failed a realize the Meme Economy: a place where memesters and
              trendsetters could stake claim to the dankest and most imminently
              viral memes. Well, thanks to NFT technology and the cumulative 150
              IQ of the Dank Bank executive team, the wait is no more. Ladies
              and gentlemen, welcome to the Meme Economy.
            </AboutPP>
            <AboutTP>
              “Dank Bank is a stock exchange for memes. You buy shares and then
              hold them and then sell them. It&#39;s exactly like every other
              stock exchange except instead of EqUiTieS we sell an asset that
              actually matters: stinky memes.”
            </AboutTP>
            <VideoBox>
              <img src="/assets/video.svg" alt="" />
              <span>
                <FaPlay />
              </span>
            </VideoBox>
          </HeroBoxContent>
        </HeroSectionBox>
      </HeroSection>
      <HIWcontainer>
        <HIWBox>
          <HIWBoxH>HOW IT WORKS</HIWBoxH>
          <AboutPP>
            You really haven’t been able to figure it out yet, have you. Let’s
            fix that.
          </AboutPP>
          <AboutTP>
            Seal live a made never blonde a invitation a the refute. I by makers
            math were we would have size.
          </AboutTP>
          
          <ThreeBoxContainer>
            <div>
              <main>
                <img src="/assets/signIn.png" alt="" />
              </main>
              <span>
                <h2>Sign In</h2>
                <p>
                  Create your account by clicking “connect wallet” and signing
                  into your Metamask. If you have no idea what that means, open
                  Internet Explorer and look it up.{" "}
                </p>
              </span>
            </div>
            <div>
              <span>
                <h2>Trade</h2>
                <p>
                  Buy shares of your favorite memes, videos, or other internet
                  artifacts and hold them… or look at them… or show them to your
                  friends. Honestly it's not our job to tell you what to do with
                  them.
                </p>
              </span>
              <main>
                <img src="/assets/trade.png" alt="" />
              </main>
            </div>
            <div>
              <main>
                <img src="/assets/profit.png" alt="" />
              </main>
              <span>
                <h2>Profit</h2>
                <p>
                  What's that? Your memes have gone up in value? Wow! Sounds
                  like you should go to the market page, sell them, and enjoy
                  those monstrous monetary gains. Congratulations, you’re a real
                  diamond-handed chad.{" "}
                </p>
              </span>
            </div>
          </ThreeBoxContainer>
          
          <HIWBoxH>Resident Memelords</HIWBoxH>
          <AboutPP>
            We at <span>Dank Bank</span> are grateful to call such meme icons as
            Kyle Craven ("Bad Luck Brian"), Blake Boston ("Scumbag Steve") and
            Harry Jones (“@a”) members of our advisory team. Now I know what
            you’re thinking: “wow, thats an awful lot of cool dudes for one
            small company, should I be concerned that Dank Bank is too well
            positioned to disrupt the meme industry?” Yes, you should be.
          </AboutPP>
          <MemeLordsContainer>
            <MemeLord
              lordImg="/assets/memelord.png"
              lordName="PREZ"
              lordPosition="Chief Meme Officer"
            />
            <MemeLord
              lordImg="/assets/memelord.png"
              lordName="PREZ"
              lordPosition="Chief Meme Officer"
            />
            <MemeLord
              lordImg="/assets/memelord.png"
              lordName="PREZ"
              lordPosition="Chief Meme Officer"
            />
            <MemeLord
              lordImg="/assets/memelord.png"
              lordName="PREZ"
              lordPosition="Chief Meme Officer"
            />
          </MemeLordsContainer>
          <ContactBox>
            <HIWBoxH>Contact Us</HIWBoxH>
            <AboutPP>Speak, peasant</AboutPP>
            <ContactInputBox>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="Example: “Oh gosh I just love Dank Bank so much...”"
                ></textarea>
              </div>
            </ContactInputBox>
            <HeroContentRightDotted>
              <span>See More</span>
            </HeroContentRightDotted>
          </ContactBox>
        </HIWBox>
      </HIWcontainer>
      <Footer />
    </div>
  );
};

export default Home;

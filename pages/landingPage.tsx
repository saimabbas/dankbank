import React from "react";
import styled from "styled-components";
import PinkBtn from "../components/mainPinkBtn/mainPinkBtn";

const LGBlueContainer = styled.div`
  width: 100%;
  background-color: var(--mainblue);
  padding: 3.5rem 3.5rem 20rem 3.5rem;
  @media screen and (max-width: 1250px) {
    padding: 1.5rem 1.5rem 8.5rem 1.5rem;
  }
`;
const IMGContainer = styled.div`
  width: 100%;
  height: 70rem;
  background: url("/assets/blueBox.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3.5rem;
  @media screen and (max-width: 1250px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 650px) {
    height: 28.5rem;
  }
`;
const LPHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5rem solid #000;
  padding: 1.5rem 3.5rem;
  background-color: #fff;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    padding: 1.5rem;
  }
  & img {
    width: 7%;
    
    @media screen and (max-width: 650px) {
      width: 25%;
    }
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 650px){
      justify-content: space-between;
      flex-direction: row-reverse;
    }
    & a {
      font-size: 1.65rem;
      margin: 0 5rem 0 0;
      @media screen and (max-width: 650px) {
        margin: 0;
      }
    }
    & button {
      @media screen and (max-width: 650px) {
        padding: 1rem;
        font-size: 1.25rem;
        margin: 0 2rem 0 0;
        box-shadow: 0.35rem 0.35rem 0 0 var(--purplishblue);
      }
    }
  }
`;
const LPVideoBox = styled.div`
  width: 90%;
  margin: 0 auto;
  transform: translate(0, 7.5rem);
  position: relative;
  @media screen and (max-width: 650px) {
    width: 100%;
    transform: translate(0, 2.5rem);
  }
  & img:nth-child(1) {
    width: 100%;
    height: 60rem;
    object-fit: cover;

    @media screen and (max-width: 650px) {
      height: 20rem;
      width: 100%;
    }
  }
  & img:nth-child(2) {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const LGBig = styled.div`
  width: 100%;
  margin: 5rem 0;
  padding: 3.5rem;
  @media screen and (max-width: 650px) {
    padding: 1.5rem;
    margin: 2.5rem 0;
  }
`;
const LGBigBlack = styled.div`
  padding: 10rem 10%;
  border: 0.5rem solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 650px) {
    padding: 5rem 5%;
  }
  & h1 {
    font-size: 5rem;
    font-family: "Teko", "Prompt", sans-serif;
    font-weight: 700;
    margin: 0 0 3.5rem 0;

    @media screen and (max-width: 650px) {
      line-height: 4.5rem;
      text-align: center;
    }
  }
  & p {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }
  & button {
    margin: 5rem 0;
  }
  & .mnk {
    margin: 0 0 5rem 0;
  }
`;
const LGgrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 5rem 15rem;
  margin: 5rem 0;
  @media screen and (max-width: 1250px) {
    width: 100%;
    grid-gap: 5rem 7.5rem;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    grid-gap: 5rem;
    grid-template-columns: 1fr;
    padding: 0 15%;
  }
`;
const LGGridBox = styled.div`
  &:nth-child(1) {
    & span {
      transform: rotate(2deg);
    }
    & div {
      transform: translate(-10%, -50%) rotate(7.5deg);
    }
  }
  &:nth-child(2) {
    & span {
      transform: rotate(5deg);
    }
    & div {
      transform: translate(10%, -35%) rotate(-2.5deg);
    }
  }
  &:nth-child(3) {
    & span {
      transform: rotate(2deg);
    }
    & div {
      transform: translate(15%, -50%) rotate(-9.5deg);
    }
  }
  &:nth-child(4) {
    & span {
      transform: rotate(-2deg);
    }
    & div {
      transform: translate(10%, -35%) rotate(6deg);
    }
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.25rem solid #000;
    padding: 1rem;
    background-color: #fff;
    & img {
      width: 100%;
    }
  }
  & div {
    border: 0.25rem solid #000;
    text-align: center;
    background-color: #fffcf1;
    padding: 1rem 4rem;
    width: max-content;
    @media screen and (max-width: 1250px) {
      padding: 0.5rem 0rem;
      width: 100%;
    }
    & h6 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0 0 0.45rem 0;
      @media screen and (max-width: 1250px) {
        margin: 0 0 0.25rem 0;
        font-size: 1.5rem;
      }
    }
    & h5 {
      font-size: 1.65rem;
      margin: 0;
      font-weight: 400;
      @media screen and (max-width: 1250px) {
        font-size: 1.35rem;
      }
    }
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
        @media screen and (max-width: 450px) {
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
      align-items: center;
      width: 50%;
      @media screen and (max-width: 450px) {
        width: 100%;
        text-align: center;
      }
      & h2 {
        font-size: 2.75rem;
        font-weight: 900;
        font-family: "Teko", "Prompt", sans-serif;
        margin: 0;
      }
      & section {
        display: flex;
        align-items: center;
        margin: 0 0 1rem 0;
        & img {
          width: 3rem;
          height: 3rem;
          margin: 0 1rem 0 0;
        }
      }
      & p {
        font-size: 1.75rem;
        font-weight: 500;
      }
    }
  }
`;
const MainBtnP = styled.div`
  width: 100%;
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterLP = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--mainblue);
  & img:nth-child(1) {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
  }
  & img:nth-child(2) {
    width: 4rem;
    height: 4rem;
    margin: 1rem 0;
  }
  & p {
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.75;
    margin: 1rem 0;
  }
`;
const landingPage = () => {
  return (
    <>
      <LGBlueContainer>
        <IMGContainer>
          <LPHeader>
            <img src="/assets/headerLogo.png" alt="" />
            <div>
              <a>Contact</a>
              <PinkBtn text="Claim Username" />
            </div>
          </LPHeader>
          <LPVideoBox>
            <img src="/assets/chickchick.png" alt="" />
            <img src="/assets/play.png" alt="" />
          </LPVideoBox>
        </IMGContainer>
      </LGBlueContainer>
      <LGBig>
        <LGBigBlack>
          <h1>Hey kid, wanna buy some memes?</h1>
          <p>
            Dank Bank lets you buy ownership of your favorite memes and trade
            the most iconic moments in internet history!
          </p>
          <PinkBtn text="Claim Username" />
          <img className="mnk" src="/assets/mnk.png" alt="" />
          <h1>Resident Memelords</h1>
          <p>
            We at <span>Dank Bank</span> are grateful to call such meme icons as{" "}
            <a href="">Kyle Craven</a> ("Bad Luck Brian") and{" "}
            <a href="">Blake Boston</a> ("Scumbag Steve") members of our
            executive team. Now I know what you’re thinking: “wow, thats an
            awful lot of cool dudes for one small company, should I be concerned
            that Dank Bank is too well positioned to disrupt the meme industry?”{" "}
            <span>Yes, you should be</span> 🔥
          </p>
          <LGgrid>
            <LGGridBox className="gb1">
              <span>
                <img src="/assets/chill.png" alt="" />
              </span>
              <div>
                <h6>Bad Luck Brian</h6>
                <h5>Advisor - internet legend</h5>
              </div>
            </LGGridBox>
            <LGGridBox>
              <span>
                <img src="/assets/chill.png" alt="" />
              </span>
              <div>
                <h6>Bad Luck Brian</h6>
                <h5>Advisor - internet legend</h5>
              </div>
            </LGGridBox>
            <LGGridBox>
              <span>
                <img src="/assets/chill.png" alt="" />
              </span>
              <div>
                <h6>Bad Luck Brian</h6>
                <h5>Advisor - internet legend</h5>
              </div>
            </LGGridBox>
            <LGGridBox>
              <span>
                <img src="/assets/chill.png" alt="" />
              </span>
              <div>
                <h6>Bad Luck Brian</h6>
                <h5>Advisor - internet legend</h5>
              </div>
            </LGGridBox>
          </LGgrid>
          <h1>How it works</h1>
          <p>
            Seal live a made never blonde a invitation a the refute. I by makers
            math were we would have size.
          </p>
          <ThreeBoxContainer>
            <div>
              <main>
                <img src="/assets/signIn.png" alt="" />
              </main>
              <span>
                <section>
                  <img src="/assets/11.png" alt="" />
                  <h2>Sign In</h2>
                </section>
                <p>
                  Create your account by clicking “connect wallet” and signing
                  into your Metamask
                </p>
              </span>
            </div>
            <div>
              <span>
                <section>
                  <img src="/assets/11.png" alt="" />
                  <h2>Trade</h2>
                </section>
                <p>
                  Buy shares of your favorite memes, videos, or other generally
                  cringe internet artifacts and hold them… or look at them… or
                  show them to your ‘friends.’ Honestly it's not my job to tell
                  you what to do. You’re a big kid 😎
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
                <section>
                  <img src="/assets/11.png" alt="" />
                  <h2>Profit</h2>
                </section>
                <p>
                  What's that? Your memes have appreciated? Wow! Sounds like you
                  should go to the market page, sell them, and enjoy those
                  monstrous monetary gains. Congratulations, you’re a real
                  diamond-handed chad.
                </p>
              </span>
            </div>
          </ThreeBoxContainer>
        </LGBigBlack>
      </LGBig>

      <MainBtnP>
        <PinkBtn text="Claim Username" />
      </MainBtnP>
      <FooterLP>
        <img src="/assets/whiteLogo.png" alt="" />
        <p>Welcome to the meme economy✌️</p>
        <img src="/assets/twtr.png" alt="" />
        <p>© 2021 all rights reserved</p>
      </FooterLP>
    </>
  );
};

export default landingPage;

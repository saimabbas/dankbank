import React from "react";
import GlobalStyle from "../../theme/globalStyles";
import styled from "styled-components";

const Footer = styled.div`
  background-color: var(--mainblue);
  margin: 5rem 0 0 0;
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  border: 0.25rem solid #000;
`;
const FooterTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;
const FooterTopCard = styled.div`
  @media screen and (max-width: 650px) {
    & > div {
      align-items: center;
      margin: 5rem 0 0 0;
    }
  }
  &:nth-child(1) {
    width: 30%;
    & img.footerLogo {
      width: 25%;
    }
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    width: 23.333334%;
    & a {
      font-size: 1.75rem;
      color: #abb1e7;
      margin-bottom: 1.5rem;
    }
  }

  & h6 {
    font-size: 2rem;
    color: #abb1e7;
    font-weight: 400;
  }
  & h1 {
    color: #fff;
    font-size: 3rem;
    font-family: "Teko", "Prompt", sans-serif;
    margin-bottom: 2.5rem;
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      width: 33.33333%;
    }
    &:nth-child(4) {
      width: 33.33333%;
    }
  }
  @media screen and (max-width: 650px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      width: 100%;
    }
    &:nth-child(4) {
      width: 100%;
      margin-left: 0%;
    }
  }
`;
const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid #abb1e7;
  padding: 2.5rem 0 0 0;
  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
  }
  & p {
    color: #abb1e7;
    font-size: 1.5rem;
    @media screen and (max-width: 450px) {
      margin: 1.5rem 0 0 0;
    }
  }
`;
const FooterTopCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    & > div {
      align-items: center;
    }
  }
`;
const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5rem 0 2rem 0;
  & img {
    width: 5rem;
    height: 5rem;
    margin: 0 1.5rem 0 0;
    @media screen and (max-width: 1024px) {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 1rem 0 0;
    }
  }
`;
const footer = () => {
  return (
    <>
      <GlobalStyle />
      <Footer>
        <FooterTop>
          <FooterTopCard>
            <FooterTopCardBox>
              <img className="footerLogo" src="/assets/whiteLogo.png" alt="" />
              <FooterSocialIcons>
                <a href="#">
                  <img src="/assets/footerLogo1.svg" alt="Footer Social Link" />
                </a>
                <a href="#">
                  <img src="/assets/footerLogo2.svg" alt="Footer Social Link" />
                </a>
                <a href="#">
                  <img src="/assets/footerLogo3.svg" alt="Footer Social Link" />
                </a>
                <a href="#">
                  <img src="/assets/footerLogo4.svg" alt="Footer Social Link" />
                </a>
              </FooterSocialIcons>
              <h6>Join the community</h6>
            </FooterTopCardBox>
          </FooterTopCard>
          <FooterTopCard>
            <FooterTopCardBox>
              <h1>Pages</h1>
              <a href="#">Home</a>
              <a href="#">Market</a>
              <a href="#">How it works</a>
              <a href="#">Contact</a>
            </FooterTopCardBox>
          </FooterTopCard>
          <FooterTopCard>
            <FooterTopCardBox>
              <h1>Marketplace</h1>
              <a href="#">Browse all markets</a>
              <a href="#">New</a>
              <a href="#">Trending</a>
              <a href="#">Browse memes</a>
              <a href="#">Browse collectibles</a>
            </FooterTopCardBox>
          </FooterTopCard>
          <FooterTopCard>
            <FooterTopCardBox>
              <h1>Other</h1>
              <a href="#">Guide to the Meme Economy</a>
              <a href="#">Docs</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </FooterTopCardBox>
          </FooterTopCard>
        </FooterTop>
        <FooterBottom>
          <p>2021 All rights reserved</p>
          <p>Welcome to the meme economy ✌️</p>
        </FooterBottom>
      </Footer>
    </>
  );
};

export default footer;

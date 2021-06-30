import React, { useState, FunctionComponent } from "react";
import GlobalStyle from "../../theme/globalStyles";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import MainWhiteBtn from "../mainWhiteBtn/mainWhiteBtn";
import MainPinkBtn from "../mainPinkBtn/mainPinkBtn";
import Link from 'next/link'

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5rem solid #000;
  background-color: #fff;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 1rem 1.75rem;
  }
  @media screen and (max-width: 750px) {
    border: 0.35rem solid #000;
  }
`;
const HeaderContainerMob = styled.div`
  padding: 1.5rem 2rem;
  width: calc(100% - 6rem);
  transform: translate(3rem, 3rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5rem solid #000;
  background-color: #fff;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
  @media screen and (max-width: 750px) {
    border: 0.35rem solid #000;
  }
`;
const HeaderTextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 750px) {
    display: none;
  }
  & a {
    font-size: 1.75rem;
    color: #000;
    margin: 0 5rem 0 0;
    @media screen and (max-width: 1024px) {
      font-size: 1.65rem;
    margin: 0 2rem 0 0;
    }
  }
`;
const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 750px) {
    display: flex;
    width: 10%;
  }
`;
const HeaderLogo = styled.div`
  width: 7%;
  @media screen and (max-width: 1024px) {
    width: 10%;
  }
  @media screen and (max-width: 750px) {
    width: 22.5%;
  }
  & img {
    object-fit: contain;
    width: 100%;
  }
`;
const HeaderMobile = styled.div`
  width: calc(100% + 0.7rem);
  background-color: var(--mainblue);
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, calc(100% + 0.35rem));
  border: 0.35rem solid #000;
  border-top: 0rem solid #000;
`;

const HeaderTextBoxMob = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2.5rem 7.5rem 2.5rem;
  & a {
    font-size: 2rem;
    margin: 1.5rem 0;
    color: white;
  }
`;

const HeaderWhiteBtnMob = styled.button`
    background-color: var(--mainblue);
    color: white;
    margin: 2rem auto 0 auto;
    width: 70%;
    border-radius: 0.75rem;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.1rem 2rem;
    border: 0.2rem solid #fff;
`;

const HeaderPinkBtnMob = styled.button`
    margin: 2rem auto 0 auto;
    width: 70%;
    border-radius: 0.75rem;
    border: 0.2rem solid #000;
    font-size: 1.5rem;
    padding: 1.1rem 2rem;
    font-weight: 600;
    background-color: var(--mainpink);
    color: #fff;
    box-shadow: 0.5rem 0.5rem 0 0 var(--purplishblue);
`
const Header: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderLogo>
          {/* <Image
            className="headerLogo"
            src="/assets/headerLogo.png"
            alt="headerLogo"
            width="100%"
            height="100%"
          /> */}
          <Link href="/">
          <img src="/assets/headerLogo.png" alt="" /></Link>
        </HeaderLogo>
        <Hamburger>
          <Image
            className="hamburger"
            src="/assets/hamburger.svg"
            alt="hamburger"
            onClick={handleShow}
            width="100%"
            height="100%"
          />
        </Hamburger>
        <HeaderTextBox>
          <a href="#">How it works</a>
          <a href="#">Market</a>
          <a href="#">Docs</a>
          <MainWhiteBtn text="Submit" />
          <MainPinkBtn text="Connect Wallet" />
        </HeaderTextBox>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <HeaderContainerMob>
              <HeaderLogo>
                {/* <Image
                  className="headerLogo"
                  src="/assets/headerLogo.png"
                  alt="headerLogo"
                  width="100%"
                  height="100%"
                /> */}
                <img src="/assets/headerLogo.png" alt="" />
              </HeaderLogo>
              <Hamburger>
                <Image
                  src="/assets/modalClose.svg"
                  alt="modalClose"
                  onClick={handleClose}
                  width="100%"
                  height="100%"
                />
              </Hamburger>

              <HeaderMobile>
                <HeaderTextBoxMob>
                  <Link href='/howItWorks'><a>How it works</a></Link>
                  <Link href="/market"><a>Market</a></Link>
                  <a href="#">Docs</a>
                  <HeaderWhiteBtnMob>Submit</HeaderWhiteBtnMob>
                  <HeaderPinkBtnMob>Connect Wallet</HeaderPinkBtnMob>
                  
                </HeaderTextBoxMob>
              </HeaderMobile>
            </HeaderContainerMob>
          </Modal.Body>
        </Modal>
      </HeaderContainer>
      {/* header routes
      How It works ... screen 5
      Market ... screen 4
      clicking on a Meme Card ... screen 2,3 and pop-ups */}
    </>
  );
};

export default Header;

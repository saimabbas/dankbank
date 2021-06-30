import React, { FunctionComponent } from "react";
import Header from "../components/header/header";
import Head from "next/head";
import Footer from "../components/footer/footer";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
const Settings = () => {
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
    position: relative;
    @media screen and (max-width: 1050px) {
      margin: 0 2.5rem 0 0;
      padding: 0.75rem;
      @media screen and (max-width: 450px) {
        margin: 0;
      }
    }
    & span {
      font-size: 1.25rem;
      white-space: nowrap;
      color: #000;
      background-color: #eaeaea;
      padding: 1rem 3.5rem;
      font-weight: 500;
      border-radius: 1rem;
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
    & span {
      position: relative;
      @media screen and (max-width: 450px) {
        display: flex;
        align-items: center;
      }
      & div {
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(150%, -50%);
        border: 1px solid #AB92AC;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        @media screen and (max-width: 450px) 
        {
          position: relative;
          transform: translate(0,0);
          margin: 0 0 0 1rem;
        }
        & svg 
        {
          font-size: 2.25rem;
          color: #443F3F;
        }
      }
    }
    & textarea {
      width: 90%;
      max-height: 17.5rem;
      min-height: 17.5rem;
      border: 0;
      font-size: 1.65rem;
      color: #000;
      padding: 1rem;
      &:focus {
        outline: 0;
        border: 0;
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
    margin: 0 0 1.5rem 0;
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
                <span>Upload Image</span>
              </div>
            </UserLeft>
            <UserRight>
              <span>
                <UserH>Italio Beisto</UserH>
                <div><MdEdit /></div>
              </span>
              <textarea placeholder="Tell us about yourself .."></textarea>
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
        </HomeCardsConainer>
      </HomeCardsSection>
    </div>
  );
};

export default Settings;

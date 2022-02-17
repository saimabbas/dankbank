import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import Head from "next/head";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Positive from "../components/memeDetailsTrends/positive";
import Negative from "../components/memeDetailsTrends/negative";
import MainPinkbtn from "../components/mainPinkBtn/mainPinkBtn";
import MainWhiteBtn from "../components/mainWhiteBtn/mainWhiteBtn";
import Progress from "../components/alerts/progress";
import Success from "../components/alerts/success";
import Failure from "../components/alerts/failure";
import ConfirmTransaction from "../components/modals/confirmTransaction";
// import SubmitYourMeme from "../components/modals/SubmitYourMeme";
import ModalM from "../components/modals/modalM";
import ModalC from "../components/modals/modalC";
import Footer from "../components/footer/footer";
import { setTimeout } from "timers";

const MemeDetail = styled.div`
  width: 100%;
  padding: 3.5rem;
  @media screen and (max-width: 1050px) {
    padding: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    padding: 1.5rem;
  }
`;
const MemeDetailContainer = styled.div`
  width: 100%;
  border: 0.35rem solid #000;
`;
const MemeDetailsMainBox = styled.div`
  padding: 5rem 0 0 0;
  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;
const MemeDetailsParentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const MemeDetailsLeft = styled.div`
  width: 60%;
  padding: 0 1.5rem 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    width: 45%;
  }
  @media screen and (max-width: 450px) {
    width: 100% !important;
  }
  & span {
    width: 100%;
    padding: 1rem;
    border: 0.35rem solid #000;
    display: flex;
    & img {
      width: 100%;
      aspect-ratio: 1 1;
    }
  }
`;
const MemeDetailsRight = styled.div`
  width: 40%;
  margin: 2.5rem 0 0 2.5rem;
  border: 0.35rem solid #000;
  @media screen and (max-width: 1050px) {
    width: 50%;
    margin: 2.5rem 0 0 0;
  }
  @media screen and (max-width: 450px) {
    width: 100% !important;
  }
`;
const MemeDetailsCenter = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 0 0 0;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  & div {
    margin: 0 0 1.5rem 0;
  }
  & h2 {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Teko", "Prompt", sans-serif;
  }
  & h3 {
    font-size: 1.75rem;
    font-weight: 400;
    color: #3f4040;
    margin: 0.5rem 0;
  }
`;
const MemeDetailsBoxTabs = styled.main`
  width: 100%;
  margin: 2.5rem 0;
  & ul {
    width: 100%;
    padding: 0;
    border: 0.25rem solid #000;
    border-radius: 1rem;
    & li {
      width: 50%;
      background-color: #fff;
      border-radius: 1rem;
      & a {
        color: #000;
        height: 5rem;
        padding: 0;
        background-color: unset;
        font-weight: 600;
        font-size: 1.75rem;
        border-radius: 1rem !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 450px) {
          height: 4rem;
        }
      }
    }
  }
`;
const MDRTop = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1050px) {
    padding: 1.5rem;
  }
  & button {
    width: 50%;
    margin: 2.5rem 0 0 0;
    @media screen and (max-width: 1050px) {
      width: 80%;
      margin-right: 0;
    }
  }
  & span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border: 0.2rem solid #5a5b5a;
    margin: 2.5rem 0 0 0;
    & h1 {
      font-size: 1.5rem;
      color: #3f4040;
      font-weight: 400;
      margin: 0;
    }
    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }
  }
  & main {
    margin: 0;
  }
`;
const HowMuchBox = styled.div`
  margin: 2.5rem 0 0 0;
  width: 100%;
  & label {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }
`;
const HowMuch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border: 0.2rem solid #5a5b5a;
  & div {
    display: flex;
    align-items: center;
  }
  & h1 {
    font-size: 1.65rem;
    color: #3f4040;
    padding: 0 1rem;
    margin: 0 1rem !important;
    border-right: 1px solid #000;
  }
  & a {
    font-size: 1.5rem;
    color: #e553ec !important;
    text-decoration: underline;
  }
  & input {
    width: 50%;
    border: 0;
    font-size: 1.75rem;
    font-weight: 700;
    &:focus {
      outline: 0;
      border: 0;
    }
  }
`;
const TextDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0 0 0;
  & h1 {
    font-size: 1.5rem;
    color: #3f4040;
    margin: 0;
    font-weight: 400;
  }
  & h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
  }
`;
const MDRBottom = styled.div`
  padding: 3.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 0.25rem solid #000;
  & button {
    width: 50%;
    margin-right: 0;
    @media screen and (max-width: 1050px) {
      width: 80%;
      margin-right: 0;
    }
  }
`;
const AboutTheMeme = styled.div`
  padding: 7.5rem 0 0 0;
  & h1 {
    font-size: 2.75rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    font-family: "Teko", "Prompt", sans-serif;
  }
  & p {
    font-size: 1.75rem;
  }
`;
const MemeTable = styled.div`
  margin: 5rem 0;
  border-top: 0.35rem solid #000;
  padding: 5rem;
  width: 100%;
  @media screen and (max-width: 450px) {
    padding: 3.5rem 1.5rem 0 1.5rem;
  }
  & table {
    border: 0.25rem solid #000;
    width: 100%;
    & td {
      border-bottom: 0.15rem solid #000;
      padding: 1rem 1.5rem;
      font-size: 1.65rem;
      @media screen and (max-width: 450px) {
        font-size: 1.25rem;
      }
    }
    & th {
      background-color: var(--mainblue);
      color: #fff;
      font-weight: 700;
      font-family: "Teko", "Prompt", sans-serif;
      border-bottom: 0.15rem solid #000;
      padding: 1rem 1.5rem;
      font-size: 2rem;
      @media screen and (max-width: 450px) {
        font-size: 1.25rem;
      }
    }
  }
`;
const MemeDetailsUpperPortion = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1050px) {
    padding: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    padding: 1.5rem;
  }
`;
const MemeLeftConent = styled.div`
  width: 70%;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const Graph = styled.div`
  width: 100%;
  padding: 5rem 5rem 0 0;
  & img {
    width: 100%;
  }
`;

const memeDetail = () => {
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [confirmTransaction, SetConfirmTransaction] = useState(false);
  // const [submitYourMeme, setSubmitYourMeme] = useState(false);
  const [modalM, setModalM] = useState(false);
  const [modalC, setModalC] = useState(false);
  const handleProgress = () => {
    setProgress(true);
    document.body.style.overflow = "hidden";
  };
  const handleSuccess = () => {
    setSuccess(true);
    document.body.style.overflow = "hidden";
  };
  const handleFailure = () => {
    setFailure(true);
    document.body.style.overflow = "hidden";
  };
  const handleConfirmTransaction = () => {
    false;
    SetConfirmTransaction(true);
    document.body.style.overflow = "hidden";
  };
  // const handleSubmitYourMeme = () => {
  // setSubmitYourMeme(true);
  // document.body.style.overflow = "hidden";
  // };
  const handleModalM = () => {
    setModalM(true);
    document.body.style.overflow = "hidden";
  };
  const handleModalC = () => {
    setModalC(true);
    document.body.style.overflow = "hidden";
  };
  setTimeout(() => {
    setProgress(false);
    setSuccess(false);
    setFailure(false);
    SetConfirmTransaction(false);
    // setSubmitYourMeme(false);
  }, 5000);

  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </Head>
      <MemeDetail>
        <MemeDetailContainer>
          <MemeDetailsUpperPortion>
            <Header />
            <MemeDetailsMainBox>
              <h1>$Success</h1>
              <MemeDetailsParentContainer>
                <MemeDetailsLeft>
                  <MemeLeftConent>
                    <MemeDetailsBoxTabs>
                      <ul class="nav nav-pills">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-toggle="pill"
                            href="#meme"
                            onClick={() => setOpen(true)}
                          >
                            Meme
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-toggle="pill"
                            href="#graph"
                            onClick={() => setOpen(false)}
                          >
                            Graph
                          </a>
                        </li>
                      </ul>
                    </MemeDetailsBoxTabs>
                    {open ? (
                      <span>
                        <img src="/assets/chill.png" alt="" />
                      </span>
                    ) : (
                      <Graph>
                        <img src="/assets/graph.svg" alt="" />
                      </Graph>
                    )}
                  </MemeLeftConent>
                  {open ? (

                    <MemeDetailsCenter>
                      <div>
                        <h2>Price</h2>
                        <h3>$65.08</h3>
                        <Positive />
                      </div>
                      <div>
                        <h2>Market Cap</h2>
                        <h3>$65.08</h3>
                        <Positive />
                      </div>
                      <div>
                        <h2>Trade Volume</h2>
                        <h3>$65.08</h3>
                        <Negative />
                      </div>
                      <div>
                        <h2>Liquidity</h2>
                        <h3>$1150.08</h3>
                        <Positive />
                      </div>
                    </MemeDetailsCenter>

                  ) : (

                    <MemeDetailsCenter>
                      <div>
                        <h2>Price</h2>
                        <h3>$65.08</h3>
                        <Positive />
                      </div>
                      <div>
                        <h2>Market Cap</h2>
                        <h3>$65.08</h3>
                        <Positive />
                      </div>
                      <div>
                        <h2>Trade Volume</h2>
                        <h3>$65.08</h3>
                        <Negative />
                      </div>
                      <div>
                        <h2>Liquidity</h2>
                        <h3>$1150.08</h3>
                        <Positive />
                      </div>
                    </MemeDetailsCenter>

                  )}
                </MemeDetailsLeft>
                {open ? (
                  <MemeDetailsRight>
                    <MDRTop>
                      <MemeDetailsBoxTabs>
                        <ul class="nav nav-pills">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-toggle="pill"
                              href="#buy"
                            >
                              Buy
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#sell">
                              Sell
                            </a>
                          </li>
                        </ul>
                      </MemeDetailsBoxTabs>
                      <span>
                        <h1>USDC Balance:</h1>
                        <h2>$10,043</h2>
                      </span>
                      <HowMuchBox>
                        <label htmlFor="">How Much</label>
                        <HowMuch>
                          <input type="text" defaultValue="0" />
                          <div>
                            <h1>USDC</h1>
                            <a>Max</a>
                          </div>
                        </HowMuch>
                      </HowMuchBox>
                      <TextDetails>
                        <h1>Your avg. price</h1>
                        <h2>$0.00</h2>
                      </TextDetails>
                      <TextDetails>
                        <h1>Estimated share bought</h1>
                        <h2>$0.00</h2>
                      </TextDetails>
                      <MainPinkbtn text="Buy" />
                    </MDRTop>
                    <MDRBottom>
                      <MainWhiteBtn text="Add Liquidity" />
                    </MDRBottom>
                  </MemeDetailsRight>
                ) : (
                  <MemeDetailsRight>
                    <MDRTop>
                      <MemeDetailsBoxTabs>
                        <ul class="nav nav-pills">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-toggle="pill"
                              href="#buy"
                            >
                              Buy
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#sell">
                              Sell
                            </a>
                          </li>
                        </ul>
                      </MemeDetailsBoxTabs>
                      <span>
                        <h1>USDC Balance:</h1>
                        <h2>$999,043</h2>
                      </span>
                      <HowMuchBox>
                        <label htmlFor="">How Much</label>
                        <HowMuch>
                          <input type="text" defaultValue="0" />
                          <div>
                            <h1>USDC</h1>
                            <a>Max</a>
                          </div>
                        </HowMuch>
                      </HowMuchBox>
                      <TextDetails>
                        <h1>Your avg. price</h1>
                        <h2>$120.00</h2>
                      </TextDetails>
                      <TextDetails>
                        <h1>Estimated share bought</h1>
                        <h2>$3330.00</h2>
                      </TextDetails>
                      <MainPinkbtn text="Buy" />
                    </MDRTop>
                    <MDRBottom>
                      <MainWhiteBtn text="Add Liquidity" />
                    </MDRBottom>
                  </MemeDetailsRight>
                )}
              </MemeDetailsParentContainer>
              <AboutTheMeme>
                <h1>About The Meme</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora dolores aut voluptatum quae impedit error, veniam sint
                  itaque maiores saepe. Sint quas doloremque facere natus,
                  voluptatem laboriosam similique, iure corrupti at eius
                  corporis! Assumenda sunt facilis eligendi aut error
                  dignissimos ex quam quaerat quod voluptatibus repellendus quo
                  reprehenderit est rerum animi voluptatem aliquam repellat iste
                  vero magnam, accusamus cumque. Harum, quidem mollitia
                  dignissimos maiores iusto dolores voluptates nulla, enim iure
                  numquam quia soluta quibusdam non nobis accusamus cupiditate,
                  possimus quod beatae illo placeat eum natus neque architecto
                  delectus. Quasi tempora nam ad sed vel quisquam, numquam quae
                  et dolores doloribus.
                </p>
              </AboutTheMeme>
            </MemeDetailsMainBox>
          </MemeDetailsUpperPortion>
          <MemeTable>
            <table>
              <thead>
                <tr>
                  <th>@ Largest Holders</th>
                  <th># of shares</th>
                  <th>% of meme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>@boo</td>
                  <td>5277</td>
                  <td>10.38%</td>
                </tr>
                <tr>
                  <td>@boo</td>
                  <td>5277</td>
                  <td>10.38%</td>
                </tr>
                <tr>
                  <td>@boo</td>
                  <td>5277</td>
                  <td>10.38%</td>
                </tr>
                <tr>
                  <td>@boo</td>
                  <td>5277</td>
                  <td>10.38%</td>
                </tr>
                <tr>
                  <td>@boo</td>
                  <td>5277</td>
                  <td>10.38%</td>
                </tr>
              </tbody>
            </table>
          </MemeTable>
          <button onClick={handleProgress}>Alert Progress</button>
          <button onClick={handleSuccess}>Alert Success</button>
          <button onClick={handleFailure}>Alert Failure</button>
          <button onClick={handleConfirmTransaction}>
            Confirm Transaction (Modal)
          </button>
          {/* <button onClick={handleSubmitYourMeme}>
            Submit Your Meme (Modal)
          </button> */}
          <button onClick={handleModalM}>
            Another modal
          </button>
          <button onClick={handleModalC}>
            Another modal
          </button>
        </MemeDetailContainer>
      </MemeDetail>
      <Footer />
      {progress ? <Progress /> : null}
      {success ? <Success /> : null}
      {failure ? <Failure /> : null}
      {confirmTransaction ? <ConfirmTransaction /> : null}
      {/* {submitYourMeme ? <SubmitYourMeme /> : null} */}
      {modalM ? <ModalM /> : null}
      {modalC ? <ModalC /> : null}
    </>
  );
};

export default memeDetail;

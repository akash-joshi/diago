import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Video, File, PhoneCall, X } from "react-feather";
import Lottie from "react-lottie";
import styled from "styled-components";
import Report from "./pages/Reports/report";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import LineChart from "./components/LineChart";

import "./App.css";
import animationData from "./lotties/happy.json";
import winnerAnimation from "./lotties/winner.json";
import loserAnimation from "./lotties/loser.json";

import initialMeet from "./initialMeet.json";
import gameSteps from "./game.json";
import sugarSteps from "./sugar.json";

const color = "black";

const MainSection = styled.section``;

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          style={{ color: "green" }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const MainPage = ({ setScreen }) => {
  const iconStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.2em",
  };

  const iconTextStyles = { fontSize: "0.8em", fontWeight: 500, color };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section>
      <MainSection>
        <Lottie options={defaultOptions} height={"auto"} width={"60%"} />
        <div style={{ textAlign: "center", padding: "1em", paddingTop: 0 }}>
          <div style={{ fontSize: "1.5em" }}>
            Your Latest Blood-sugar Reading
          </div>
          <div style={{ fontFamily: "Roboto Mono", fontSize: "2em" }}>140</div>
          <LinearProgressWithLabel value={80} />
          <div style={{ fontSize: "1.1em" }}>Target : 110</div>
          <br />
          <div style={{ fontSize: "1.2em" }}>
            To learn about how you can make progress on reversing diabetes
            faster,{" "}
          </div>
          <div style={{ marginTop: "0.5em" }}>
            <Link style={{ marginRight: "1em" }} to="/game">
              <Button variant="contained" color="primary">
                Click Here
              </Button>
            </Link>
            <Link to="/sugar">
              <Button variant="contained" color="secondary">
                New Reading?
              </Button>
            </Link>
          </div>
        </div>
        <div style={{ width: "100%", height: 200 }}>
          <LineChart />
        </div>
      </MainSection>
      <section
        style={{
          position: "fixed",
          bottom: 0,
          padding: "0.75em",
          borderTop: "1px solid rgb(179, 179, 179)",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a
          href="https://wa.me/919359384184"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <PhoneCall style={iconStyles} color={color} />
          <div style={iconTextStyles}>Consult</div>
        </a>
        <a
          href="https://drive.google.com/drive/u/0/my-drive"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <File style={iconStyles} color={color} />
          <div style={iconTextStyles}>Reports</div>
        </a>
        <a
          href="https://www.youtube.com/user/vinayakhingane/videos"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Video style={iconStyles} color={color} />
          <div style={iconTextStyles}>Webinars</div>
        </a>
      </section>
    </section>
  );
};

const Result = ({ gameData }) => {
  const correctAnswers = gameData.reduce(
    (acc, nextVal) => (nextVal === true ? acc + 1 : acc),
    0
  );

  const winner = correctAnswers > 1;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: winner ? winnerAnimation : loserAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const questions = [
    "Eating Leftover Pizza",
    "Take a Rikshaw instead of exercising",
    "Partaking in smoking",
  ];

  return (
    <section style={{ textAlign: "center", paddingTop: "1em" }}>
      <div style={{ position: "fixed", top: "10px", left: "10px" }}>
        <Link to="/">
          <X color={color} />
        </Link>
      </div>
      <div style={{ marginTop: "1em" }}>
        <Lottie
          options={defaultOptions}
          height={"auto"}
          width={winner ? "60%" : "90%"}
        />
      </div>
      <h1>{winner ? "Hooray !" : "Better Luck Next Time !"}</h1>
      {correctAnswers < 3 ? (
        <div>
          <h3>
            Your answers were mostly correct,<br /> but you have room for improvement!
            <br /> Your wrong answers were:
          </h3>{" "}
          <div style={{ textAlign: "left", padding: "0 2em" }}>
            {gameData.map((el, index) => {
              if (el === "false") {
                return (
                  <>
                    <div>
                      <span style={{ marginRight: "0.5em" }}>❌</span>{" "}
                      {questions[index]}
                    </div>
                    <br />
                  </>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <h3>You Answered All Questions Correctly !</h3>
      )}
    </section>
  );
};

function App() {
  const [initialData, setInitialData] = useState([]);
  const [gameData, setGameData] = useState([true, true, "false"]);
  const [screen, setScreen] = useState("InitialChatBot");
  const [sugarData, setSugarData] = useState(0);

  const InitialChatBot = (props) => {
    const handleEnd = ({ steps, values }) => {
      console.log(values);
      setInitialData(values);
      setScreen("MainPage");
    };

    return (
      <ChatBot
        handleEnd={handleEnd}
        width="100%"
        height="100vh"
        steps={initialMeet}
      />
    );
  };

  const SugarBot = (props) => {
    const history = useHistory();

    const handleEnd = ({ steps, values }) => {
      console.log(values);
      setSugarData(values[0]);
      history.push("/");
    };

    return (
      <ChatBot
        handleEnd={handleEnd}
        width="100%"
        height="100vh"
        steps={sugarSteps}
      />
    );
  };

  const GameBot = (props) => {
    const history = useHistory();

    const handleEnd = ({ steps, values }) => {
      console.log(values);
      setGameData(values);
      history.push("/result");
    };

    return (
      <ChatBot
        handleEnd={handleEnd}
        width="100%"
        height="100vh"
        steps={gameSteps}
      />
    );
  };

  const screens = {
    InitialChatBot: () => <InitialChatBot setInitialData={setInitialData} />,
    MainPage: () => <MainPage setScreen={setScreen} />,
  };

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <GameBot setGameData={setGameData} />
        </Route>
        <Route exact path="/">
          {screens[screen]()}
        </Route>
        <Route path="/report" component={Report} />
        <Route path="/result">
          <Result gameData={gameData} />
        </Route>
        <Route path="/sugar">
          <SugarBot setSugarData={setSugarData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

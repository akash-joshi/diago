import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Video, File, PhoneCall } from "react-feather";
import Lottie from "react-lottie";
import styled from "styled-components";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import animationData from "./lotties/happy.json";

import initialMeet from "./initialMeet.json";
import gameSteps from "./game.json";

const color = "black";

const MainSection = styled.section``;

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
        <div style={{ textAlign: "center", padding: "1em" }}>
          <div style={{ fontSize: "1.5em" }}>
            Your Latest Blood-sugar Reading
          </div>
          <div style={{ fontFamily: "Roboto Mono", fontSize: "2em" }}>140</div>
          <br />
          <div style={{ fontSize: "1.2em" }}>
            To learn about how you can make progress on reversing diabetes
            faster,{" "}
          </div>
          <Link
            to="/game"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            click here!
          </Link>
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
          <div style={iconTextStyles}>Documents</div>
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

function App() {
  const [initialData, setInitialData] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [screen, setScreen] = useState("MainPage");

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

  const GameBot = (props) => {
    const history = useHistory();

    const handleEnd = ({ steps, values }) => {
      console.log(values);
      setGameData(values);
      history.push("/");
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
        <Route path="/">{screens[screen]()}</Route>
      </Switch>
    </Router>
  );
}

export default App;

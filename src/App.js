import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Video, File, PhoneCall } from "react-feather";
import styled from "styled-components";

import "./App.css";

import initialMeet from "./initialMeet.json";

const color = "black";

const MainSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const MainPage = ({ setScreen }) => {
  const iconStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.2em",
  };

  const iconTextStyles = { fontSize: "0.8em", fontWeight: 500, color };

  return (
    <section>
      <MainSection>
        <div style={{ padding: "0.5em" }}>
          Hello There !
          <br />
          To learn about how you can make progress on reversing diabetes,{" "}
          <a
            onClick={() => setScreen("GameBot")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            click here!
          </a>
        </div>
        <div style={{ padding: "0.5em" }}>Animation goes here</div>
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
      setTimeout(() => {
        setScreen("MainPage");
      }, 2000);
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
    const handleEnd = ({ steps, values }) => {
      console.log(values);
      setGameData(values);
      setTimeout(() => {
        setScreen("MainPage");
      }, 2000);
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

  const screens = {
    InitialChatBot: () => <InitialChatBot setInitialData={setInitialData} />,
    MainPage: () => <MainPage setScreen={setScreen} />,
    GameBot: () => <GameBot setGameData={setGameData} />,
  };

  return <div>{screens[screen]()}</div>;
}

export default App;

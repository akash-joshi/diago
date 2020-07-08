import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Video, File } from "react-feather";
import styled from "styled-components";

import initialMeet from "./initialMeet.json";

const color = "black";

const MainPage = (props) => {
  const iconStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.2em",
  };

  const iconTextStyles = { fontSize: "0.7em", fontWeight: 500, color };

  return (
    <section>
      Hello World !
      <section
        style={{
          position: "fixed",
          bottom: 0,
          padding: "1em",
          borderTop: "1px solid #e5e5e5",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <File style={iconStyles} color={color} />
          <div style={iconTextStyles}>Documents</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Video style={iconStyles} color={color} />
          <div style={iconTextStyles}>Webinars</div>
        </div>
      </section>
    </section>
  );
};

function App() {
  const [initialData, setInitialData] = useState({});
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

  const screens = {
    InitialChatBot: () => <InitialChatBot setInitialData={setInitialData} />,
    MainPage: () => <MainPage />,
  };

  return <div className="App">{screens[screen]()}</div>;
}

export default App;

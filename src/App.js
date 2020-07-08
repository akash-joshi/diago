import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";

import initialMeet from "./initialMeet.json";

const MainPage = (props) => {
  return <section>Hello World !</section>;
};

function App() {
  const [initialData, setInitialData] = useState({});
  const [screen, setScreen] = useState("InitialChatBot");

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

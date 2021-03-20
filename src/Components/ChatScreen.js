import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

export const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/01/16068545291871.jpg",
      message: "Whats up :heart:",
    },
    {
      name: "Ellen",
      image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/01/16068545291871.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hows it going!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__imagen" src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

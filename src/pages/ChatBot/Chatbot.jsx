import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import "./Chatbot.css"; // Import the CSS file

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() !== "") {
      // Add user message
      const newMessages = [...messages, { sender: "user", text: inputText }];
      setMessages(newMessages);

      // Clear input field
      setInputText("");

      // Bot response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: genericBotResponse(inputText) },
        ]);
      }, 1000); // 1 second delay for bot response
    }
  };

  const genericBotResponse = (userInput) => {
    // You can extend this with more complex logic later
    return "I'm just a bot, but I hear you!";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? "user-bubble" : "bot-bubble"}
          >
            {message.sender === "bot" && (
              <div className="bot-icon">
                🤖 {/* Bot icon to distinguish */}
              </div>
            )}
            {message.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key
          className="msg-input"
        />
        <button className="send-button" onClick={handleSend}>
          <IoSend className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default ChatApp;

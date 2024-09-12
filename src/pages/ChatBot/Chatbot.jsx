import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

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
      {/* Top Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <span style={styles.navLogo}>✨ Hands-On Heroes</span>
        </div>
        <div style={styles.navRight}>
          <FaSearch style={styles.icon} />
          <FaBell style={styles.icon} />
          <FaUserCircle style={styles.icon} />
        </div>
      </nav>

      {/* Chat Section */}
      <div style={styles.chatContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={
              message.sender === "user" ? styles.userBubble : styles.botBubble
            }
          >
            {message.sender === "bot" && (
              <div style={styles.botIcon}>
                🤖 {/* Bot icon to distinguish */}
              </div>
            )}
            {message.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div style={styles.chatInputContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}  // Handle Enter key
          style={styles.input}
        />
        <button style={styles.sendButton} onClick={handleSend}>
          <IoSend style={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#000022",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  navLeft: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
  },
  navLogo: {
    color: "#fff",
    fontSize: "1.2rem",
  },
  icon: {
    color: "#fff",
    fontSize: "1.5rem",
    marginLeft: "1rem",
  },
  chatContainer: {
    flexGrow: 1,
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflowY: "auto",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#EBE6E3",
    color: "#000022",
    borderRadius: "20px",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    maxWidth: "60%",
    wordWrap: "break-word",
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#000066",
    color: "#EBE6E3",
    borderRadius: "20px",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    maxWidth: "60%",
    wordWrap: "break-word",
    display: "flex",
    alignItems: "center",
  },
  botIcon: {
    marginRight: "0.5rem",
    fontSize: "1.5rem", // Adjust this for bot icon size
  },
  chatInputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  },
  input: {
    flexGrow: 1,
    padding: "0.75rem 1rem",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "#EBE6E3",
    border: "1px solid #EBE6E3",
    borderRadius: "20px",
  },
  sendButton: {
    backgroundColor: "transparent",
    border: "none",
    marginLeft: "1rem",
    cursor: "pointer",
  },
  sendIcon: {
    fontSize: "1.5rem",
    color: "#000",
  },
};

export default ChatApp;

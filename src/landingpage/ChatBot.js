import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "50px auto",
      border: "1px solid #e2e2e2",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      height: "600px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      fontFamily: "Segoe UI, sans-serif",
    }}>
      <div style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#387ed1",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "18px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
      }}>
        💬 Chat with Support
      </div>

      <div style={{
        flex: 1,
        padding: "15px",
        overflowY: "auto",
        backgroundColor: "#f9f9f9"
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.type === "user" ? "flex-end" : "flex-start",
              marginBottom: "12px"
            }}
          >
            <div style={{
              backgroundColor: msg.type === "user" ? "#387ed1" : "#e1e1e1",
              color: msg.type === "user" ? "#fff" : "#000",
              padding: "10px 15px",
              borderRadius: "18px",
              maxWidth: "70%",
              fontSize: "14px"
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: "flex",
        borderTop: "1px solid #ddd",
        padding: "10px",
        backgroundColor: "#fff"
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px"
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            backgroundColor: "#387ed1",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
3
import React from "react";
import ChatBot from "../ChatBot";

const Support = () => {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#2d2f31" }}>Support</h1>
        <p style={{ fontSize: "16px", color: "#6b6b6b" }}>
          We're here to help. Find answers to your questions or chat with our team.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px"
      }}>
        {[
          {
            title: "FAQs",
            desc: "Browse through frequently asked questions to get instant help.",
            link: "#",
            btn: "View FAQs"
          },
          {
            title: "Raise a Ticket",
            desc: "If you're facing an issue, raise a support ticket and our team will assist you.",
            link: "#",
            btn: "Submit Ticket"
          },
          {
            title: "Live Chat",
            desc: "Chat live with our support team for quick answers to your queries.",
            link: "/ChatBot",
            btn: "Start Chat"
          }
        ].map((card, index) => (
          <div key={index} style={{
            backgroundColor: "#fff",
            padding: "30px 25px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}>
            <h3 style={{ fontSize: "22px", marginBottom: "15px", color: "#1a202c" }}>{card.title}</h3>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>{card.desc}</p>
            <a href={card.link} style={{
              display: "inline-block",
              padding: "10px 18px",
              backgroundColor: "#387ed1",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px"
            }}>
              {card.btn}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FAFAFA", padding: "40px 20px", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#666" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
        <div>
          <h3 style={{ fontWeight: "600", color: "#000", marginBottom: "15px" }}>Account</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontWeight: "600", color: "#000", marginBottom: "15px" }}>Support</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontWeight: "600", color: "#000", marginBottom: "15px" }}>Company</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontWeight: "600", color: "#000", marginBottom: "15px" }}>Quick links</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "50px auto 0", textAlign: "center", fontSize: "12px", color: "#999" }}>
        <div style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "bold", color: "#387ED1" }}>ZERODHA</div>
        <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        <p style={{ marginTop: "10px" }}>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL...</p>
        <p style={{ marginTop: "10px" }}>
          Procedure to file a complaint on <a style={{ color: "#387ED1" }} href="#">SEBI SCORES</a> · 
          <a style={{ color: "#387ED1" }} href="#"> Smart Online Dispute Resolution</a> · 
          <a style={{ color: "#387ED1" }} href="#"> Grievances Redressal Mechanism</a>
        </p>
        <p style={{ marginTop: "10px" }}>Investments in securities market are subject to market risks...</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card 1</p>
      </Card>

      <Card>
        <p>Card 2</p>
        <p>설명</p>
      </Card>

      <Card>
        <article>블라블라</article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        minWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar image="../public/profile.jpg" name="May" size={200} />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

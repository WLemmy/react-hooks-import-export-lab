const username = "Liza";
const city = "New York";

const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports
import React from "react";

export function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

export function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

export function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is the about page content.</p>
    </div>
  );
}
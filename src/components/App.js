import React from "react";
import { NavBar} from "./components/navbar.js";
import { Home } from "./components/home.js";
import { About } from "./components/about.js";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

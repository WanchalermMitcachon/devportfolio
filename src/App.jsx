import { useState } from "react";
import Profile from "./components/Profile/Profile";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="mt-16 ">
      <Profile />
      {/* <Tech />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;

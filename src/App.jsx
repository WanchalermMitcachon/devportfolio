import { useState } from "react";
import Profile from "./components/Profile/Profile";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="mt-4 ">
      <Profile />
      <hr className="mx-4 mt-12 "></hr>
      <Tech />
      <hr className="mx-4 mt-12"></hr>
      <Projects />
      <Contact />
      <hr className="mx-4 "></hr>
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from "react";
import Profile from "./components/Profile/Profile";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden md:mt-0 ">
      <Profile />
      <hr className="mx-4 mt-12 lg:mx-24"></hr>
      <Tech />
      <hr className="mx-4 mt-[-20%] md:hidden"></hr>
      <Projects />
      <Contact />
      <hr className="x-4 md:mx-8 lg:mx-24"></hr>
      <Footer/>
    </div>
  );
}

export default App;

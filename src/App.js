import "./App.css";
import Nav from "./Nav";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import MyComponent from "./components/MyComponent";
import Speech from "./components/Speech";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [lText, setlText] = useState("dark");
  const [uTextColor, setUtextColor] = useState("dark");
  const [toggleText, setToggelText] = useState({
    lbText: "Enable Dark Mode",
    modeText: "dark",
  });

  // set Alert //////
  const [alert, setAlert] = useState(null);

  const showMessage = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setlText("dark");
      setToggelText({ lbText: "Enable Dark Mode" });
      setUtextColor("dark");
      showMessage("Light mode Enable", "success");
      document.body.style.background = "white";
      document.title = "TextUtils: Light Mode Enabled";
    } else {
      setMode("dark");
      setlText("light");
      setToggelText({ lbText: "Disable Dark Mode" });
      setUtextColor("light");
      showMessage("Dark mode Enable", "success");
      document.body.style.background = "#2F539B";
      document.title = "TextUtils: Dark Mode Enabled";
    }
  };

  const redToggel = () => {
    if (mode === "dark") {
      setMode("light");
      setlText("dark");
      setToggelText({ lbText: "Enable Dark/Red Mode" });
      setUtextColor("dark");
      showMessage("Light mode Enable", "success");
      document.body.style.background = "white";
    } else {
      setMode("dark");
      setlText("light");
      setToggelText({ lbText: "Disable Red Mode" });
      setUtextColor("light");
      showMessage("Dark mode Enable", "success");
      document.body.style.background = "red";
    }
  };
  return (
    <Router>
      <div className="container">
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          redToggel={redToggel}
          toggleMode={toggleMode}
          toggleText={toggleText}
          lText={lText}
        />
      </div>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>

           <Route exact path="/" element={<TextForm
          heading="Enter your text to analyze"
          mode={mode}
          showMessage={showMessage}
        />}/>
          <Route exact path="/About" element={<About/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

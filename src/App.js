import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import About from "./About";
import { useState } from "react";
import Alert from "./Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [modeGreen, setModeGreen] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272950";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
    }
  };
  const toggleModeGreen = () => {
    if (modeGreen === "light") {
      setModeGreen("dark");
      document.body.style.backgroundColor = "green";
      showAlert("GreenMode has been enabled", "success");
    } else {
      setModeGreen("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
    }
  };
  return (

    // <Router>
      
        // <Navbar
        //   TextUtils="TextUtils"
        //   mode={mode}
        //   modeGreen={modeGreen}
        //   toggleMode={toggleMode}
        //   toggleModeGreen={toggleModeGreen}
        // />
        // <Alert alert={alert}/>
      

        //   <Routes>
        //     <Route path="/about" element={<About mode={mode}/>}>
        //     </Route>

        //     <Route path="/" element={<Textform
        //         heading="enter the text to analyze"
        //         mode={mode}
        //         showAlert={showAlert}
        //       />} > 
              
        //     </Route>
           
        //   </Routes> 
        <div>
        <Navbar
          TextUtils="TextUtils"
          mode={mode}
          modeGreen={modeGreen}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
        />
       
        <Textform
                heading="enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
              </div>
    //  </Router>
   
   
  );
}
export default App;

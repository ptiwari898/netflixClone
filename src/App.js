import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Home/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
s
    </Router>
  );
}

export default App;

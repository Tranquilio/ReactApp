import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

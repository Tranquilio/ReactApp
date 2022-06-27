import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import SurveyPage from "./surveypage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/profile/survey" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

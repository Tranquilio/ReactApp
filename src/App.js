import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import SurveyPage from "./surveypage";
import OverviewPage from "./overview";
import InsightsPage from "./insights";
import RecommendationPage from "./recommendation";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/profile/survey" element={<SurveyPage />} />
        <Route path="/profile/overview" element={<OverviewPage />} />
        <Route path="/profile/insights" element={<InsightsPage />} />
        <Route path="/profile/recommendation" element={<RecommendationPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

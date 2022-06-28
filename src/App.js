import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import SurveyPage from "./profile/surveypage";
import OverviewPage from "./profile/overview";
import InsightsPage from "./profile/insights";
import RecommendationPage from "./profile/recommendation";
import Data from "./api/database";
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
        <Route path="/api/database" element={<Data />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

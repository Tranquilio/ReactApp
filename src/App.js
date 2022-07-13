import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import SurveyPage from "./profile/surveypage";
import CreatePage from "./profile/survey/create";
import PreviewPage from "./profile/survey/preview";
import DeployPage from "./profile/survey/deploy";
import OverviewPage from "./profile/overview";
import InsightsPage from "./profile/insights";
import RecommendationPage from "./profile/recommendation";
import Data from "./api/database";
import Assessment from "./lastSurveyPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/overview" element={<OverviewPage />} />
        <Route path="/profile/insights" element={<InsightsPage />} />
        <Route path="/profile/recommendation" element={null} /> 
        <Route path="/profile/survey" element={<SurveyPage />} />
        
        <Route path="/profile/survey/create" element={<CreatePage />} />
        <Route path="/profile/survey/preview" element={<PreviewPage />} />
        <Route path="/profile/survey/deploy" element={<DeployPage />} />
    
        <Route path="/assessment" element={<Assessment />} /> 
        <Route path="/survey" element={<Survey />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

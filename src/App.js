import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Survey from "./survey";
import SurveyPage from "./profile/surveypage";
import CreatePage from "./profile/survey/create";
import PreviewPage from "./profile/survey/preview";
import DeployPage from "./profile/survey/deploy";
import OverviewPage from "./profile/overview";
import InsightsPage from "./profile/insights";
import Assessment from "./lastSurveyPage";
import RecommendationPage from "./profile/recommendation";
import SettingsPage from "./profile/settings";
import ErrorPage from "./ErrorPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/overview" element={<OverviewPage />} />
        <Route path="/profile/insights" element={<InsightsPage />} />
        <Route path="/profile/recommendation" element={<RecommendationPage />} /> 
        <Route path="/profile/survey" element={<SurveyPage />} />
        <Route path="/profile/settings" element={<SettingsPage />} />
        
        <Route path="/profile/survey/create" element={<CreatePage />} />
        <Route path="/profile/survey/preview" element={<PreviewPage />} />
        <Route path="/profile/survey/deploy" element={<DeployPage />} />
    
        <Route path="/assessment" element={<Assessment />} /> 
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Navigate to="/profile/overview" replace />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

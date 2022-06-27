import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./survey";
import OverviewPage from "./overview";
import InsightsPage from "./insights";
import RecommendationPage from "./recommendation";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/recommendation" element={<RecommendationPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

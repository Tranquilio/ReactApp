import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Survey from "./extras/survey"
import SurveyPage from "./profile/surveypage"
import CreatePage from "./profile/survey/create"
import PreviewPage from "./profile/survey/preview"
import DeployPage from "./profile/survey/deploy"
import OverviewPage from "./profile/overview"
import InsightsPage from "./profile/insights"
import Assessment from "./extras/lastSurveyPage"
import RecommendationPage from "./profile/recommendation"
import SettingsPage from "./profile/settings"
import ErrorPage from "./extras/ErrorPage"
import LoginForm from "./login/login"
import './App.css'
import { AuthContext } from './context/AuthContext'
import React, { useState, useEffect, useCallback } from 'react'
import { useAuth } from './hooks/auth-hook'
import DevAccess from "./login/devaccess"

function App() {
  const { token, login, logout, email, domain } = useAuth()

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
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
        <Route path="/login" element={<Navigate to="/profile/overview" replace />} />
        <Route path="/devaccess" element={<Navigate to="/profile/overview" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/devaccess" element={<DevAccess />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, email: email, domain: domain, login: login, logout: logout }}
    >
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </ AuthContext.Provider>
  );
}

export default App;

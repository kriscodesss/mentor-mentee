import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MentorProfile from './components/MentorProfile';
import MenteeProfile from './components/MenteeProfile';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/mentor-profile"
        element={
          <ProtectedRoute allowedRoles={['mentor']}>
            <MentorProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mentee-profile"
        element={
          <ProtectedRoute allowedRoles={['mentee']}>
            <MenteeProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;

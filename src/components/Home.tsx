import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const setRole = useAuthStore((state) => state.setRole);

  const handleRoleSelection = (role: 'mentor' | 'mentee') => {
    setRole(role);
    navigate(role === 'mentor' ? '/mentor-profile' : '/mentee-profile');
  };

  return (
    <div>
      <h1>Welcome to the Mentor-Mentee Matching Platform!</h1>
      <p>Are you a mentor or a mentee?</p>
      <button onClick={() => handleRoleSelection('mentor')}>Mentor</button>
      <button onClick={() => handleRoleSelection('mentee')}>Mentee</button>
    </div>
  );
};

export default Home;

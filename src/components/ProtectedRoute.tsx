import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles: ('mentor' | 'mentee')[] }> = ({
  children,
  allowedRoles,
}) => {
  const role = useAuthStore((state) => state.role);
  const location = useLocation();

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
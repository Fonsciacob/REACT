import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth/pages/Login';
import { Dc } from '../heroes/pages/Dc';
import { Marvel } from '../heroes/pages/Marvel';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

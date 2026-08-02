import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

const DashboardHome = lazy(() => import('./pages/DashboardHome'));
const EmployeeDirectory = lazy(() => import('./pages/EmployeeDirectory'));
const EmployeeDetail = lazy(() => import('./pages/EmployeeDetail'));
const Profile = lazy(() => import('./pages/Profile'));

function PageFallback() {
  return <div className="p-6 animate-pulse text-sm text-gray-400">Loading page…</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          index
          element={<Suspense fallback={<PageFallback />}><DashboardHome /></Suspense>}
        />
        <Route
          path="employees"
          element={<Suspense fallback={<PageFallback />}><EmployeeDirectory /></Suspense>}
        />
        <Route
          path="employees/:id"
          element={<Suspense fallback={<PageFallback />}><EmployeeDetail /></Suspense>}
        />
        <Route
          path="profile"
          element={<Suspense fallback={<PageFallback />}><Profile /></Suspense>}
        />
      </Route>
    </Routes>
  );
}
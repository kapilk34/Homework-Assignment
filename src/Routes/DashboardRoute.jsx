import DashboardLayout from '../Layout/DashboardLayout';
import Dashboard from '../Component/Dashboard';
import Contact from '../Component/Contact';

const DashboardRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <Dashboard />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
};

export default DashboardRoutes;
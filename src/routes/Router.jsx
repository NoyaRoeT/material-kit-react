import { lazy, Suspense } from 'react';
import { Outlet, useRoutes, Navigate } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';

import SvgColor from '../components/svgColor/SvgColor';

const icon = (name) => (
  <SvgColor src={`/assets/icons/sidebar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const sideBarItems = [
  {
    title: 'Data Overview',
    path: '/dataOverview',
    icon: icon('data_overview'),
  },
  {
    title: 'Data Entry',
    path: '/dataEntry',
    icon: icon('data_entry'),
  },
];

export const Login = lazy(() => import('../pages/Login'));
export const NotFound = lazy(() => import('../pages/NotFound'));

export const DataEntry = lazy(() => import('../pages/dataEntry/DataEntry'));
export const DataOverview = lazy(() => import('../pages/dataOverview/DataOverview'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      element: (
        <DashboardLayout sideBarItems={sideBarItems}>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/', element: <Navigate to="/dataOverview" /> },
        { path: '/dataEntry', element: <DataEntry /> },
        { path: '/dataOverview', element: <DataOverview /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return routes;
}

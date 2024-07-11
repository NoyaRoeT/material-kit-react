import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';

import SvgColor from '../components/svgColor/SvgColor';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const sideBarItems = [
  {
    title: 'Data Entry',
    path: '/dataEntry',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Show Data',
    path: '/showData',
    icon: icon('ic_user'),
  },
];

export const Login = lazy(() => import('../pages/Login'));
export const NotFound = lazy(() => import('../pages/NotFound'));

export const DataEntry = lazy(() => import('../pages/dataEntry/DataEntry'));
export const ShowData = lazy(() => import('../pages/showData/ShowData'));

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
        { path: '/dataEntry', element: <DataEntry /> },
        { path: '/showData', element: <ShowData /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return routes;
}

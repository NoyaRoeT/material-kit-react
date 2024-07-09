import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layout/DashboardLayout';

import SvgColor from 'src/components/svg-color/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const sideBarItems = [
  {
    title: 'Input',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Output',
    path: '/output',
    icon: icon('ic_user'),
  },
];

export const LoginPage = lazy(() => import('src/pages/Login'));
export const Page404 = lazy(() => import('src/pages/NotFound'));

export const InputPage = lazy(() => import('src/pages/Input/'));
export const OutputPage = lazy(() => import('src/pages/Output/'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <LoginPage />,
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
        { element: <InputPage />, index: true },
        { path: '/output', element: <OutputPage /> },
        { path: '*', element: <Page404 /> },
      ],
    },
  ]);

  return routes;
}

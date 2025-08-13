import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { PATH } from '@/constants/path';

import NotFound from '@/components/ErrorPage/NotFound';
import SomethingWentWrong from '@/components/ErrorPage/SomethingWentWrong';
import APIErrorBoundary from '@/components/ErrorBoundary/APIErrorBoundary';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnKnownErrorBoudary';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InAppBrowserDetect from '@/components/InAppBrowser';
import MemeDetailPage from '@/pages/MemeDetailPage';
import MemeQuizPage from '@/pages/MemeQuizPage';

type ROUTE_TYPE = 'PRIVATE' | 'PUBLIC';

const createAuthRouter = (routeType: ROUTE_TYPE, children: RouteObject[]) => {
  const authRouter = children.map((child: RouteObject) => ({
    element: routeType === 'PRIVATE' ? <PrivateRoute /> : <PublicRoute />,
    children: [child],
  }));
  return authRouter;
};

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: (
      <InAppBrowserDetect>
        <UnknownErrorBoundary>
          <APIErrorBoundary>
            <Outlet />
          </APIErrorBoundary>
        </UnknownErrorBoundary>
      </InAppBrowserDetect>
    ),
    errorElement: <SomethingWentWrong />,
    children: [
      {
        index: true,
        element: <MemeQuizPage />,
      },
      {
        path: PATH.MEME_DETAIL(),
        element: <MemeDetailPage />,
      },
      {
        path: PATH.QUIZ,
        element: <MemeQuizPage />,
      },
      ...createAuthRouter('PRIVATE', []),
      ...createAuthRouter('PUBLIC', []),
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;

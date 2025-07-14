import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { PATH } from '@/constants/path';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
      <div>
        <h1>Meme Wiki</h1>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/a',
        element: <div>A</div>,
      },
      ...createAuthRouter('PRIVATE', []),
      ...createAuthRouter('PUBLIC', []),
    ],
  },
]);

export const RouteProvider = () => <RouterProvider router={router} />;

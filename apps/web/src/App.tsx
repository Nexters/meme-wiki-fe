import 'the-new-css-reset/css/reset.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MemeWikiUIProvider } from '@meme_wiki/ui';
import DefaultComponent from './components/DefaultComponent';
import LandingPage from './pages/Landing';

const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: '/default',
    element: <DefaultComponent />,
  },
]);

const App = () => {
  return (
    <MemeWikiUIProvider>
      <RouterProvider router={router} />
    </MemeWikiUIProvider>
  );
};

export default App;

import './index.css';

import { MemeWikiUIProvider } from '@meme-wiki/ui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Meme Wiki</div>,
  },
]);

function App() {
  return (
    <MemeWikiUIProvider>
      <RouterProvider router={router} />
    </MemeWikiUIProvider>
  );
}

export default App;

import './index.css';

import { MemeWikiUIProvider } from '@meme-wiki/ui';
import { RouteProvider } from './routes/RouteProvider';
import { QueryClientProvider, QueryDevTools } from '@meme-wiki/apis';

function App() {
  return (
    <QueryClientProvider>
      <QueryDevTools />
      <MemeWikiUIProvider>
        <RouteProvider />
      </MemeWikiUIProvider>
    </QueryClientProvider>
  );
}

export default App;

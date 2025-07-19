import { MemeWikiUIProvider } from '@meme_wiki/ui';
import { QueryClientProvider, QueryDevTools } from '@meme_wiki/apis';
import RouteProvider from './routes/RouteProvider';

const App = () => {
  return (
    <QueryClientProvider>
      <QueryDevTools />
      <MemeWikiUIProvider>
        <RouteProvider />
      </MemeWikiUIProvider>
    </QueryClientProvider>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingLayout } from './components/layout/landing';
import { LandingPage } from './features/LandingPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from './components/theme-provider';
import { DemoPage } from './features/DemoPage';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingLayout />}>
                <Route path="/" index element={<LandingPage />} />
                <Route path="/demo" element={<DemoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {import.meta.env.DEV && <ReactQueryDevtools />}
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;

import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingLayout } from "./components/LandingLayout";
import { AnythingPage } from "./features/AnythingPage";
import { LandingPage } from "./features/LandingPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

function App() {
  const queryClient = new QueryClient();
  return (
    // You can copy the theme configuration by https://www.radix-ui.com/themes/playground
    <Theme
      accentColor="purple"
      panelBackground="solid"
      radius="large"
      appearance="light"
    >
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingLayout />}>
                <Route path="/" index element={<LandingPage />} />
                <Route path="/anything" element={<AnythingPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {import.meta.env.DEV && <ReactQueryDevtools />}
        </QueryClientProvider>
      </RecoilRoot>
    </Theme>
  );
}

export default App;

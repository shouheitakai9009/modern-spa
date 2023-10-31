import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingLayout } from "./components/LandingLayout";
import { AnythingPage } from "./features/AnythingPage";
import { LandingPage } from "./features/LandingPage";

function App() {
  return (
    // You can copy the theme configuration by https://www.radix-ui.com/themes/playground
    <Theme
      accentColor="purple"
      panelBackground="solid"
      radius="large"
      appearance="light"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/anything" element={<AnythingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

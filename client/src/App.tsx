import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import Insights from "./pages/Insights";
import Suppliers from "./pages/Suppliers";
import Privacy from "./pages/Privacy";
import PAIA from "./pages/PAIA";
import Sitemap from "./pages/Sitemap";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/what-we-do"} component={WhatWeDo} />
      <Route path={"/sustainability"} component={Sustainability} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/leadership"} component={Leadership} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/suppliers"} component={Suppliers} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/paia"} component={PAIA} />
      <Route path={"/sitemap"} component={Sitemap} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

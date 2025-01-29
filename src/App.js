import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./components/landingPages/LandingHeader";
import LandingFooter from "./components/landingPages/LandingFooter";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import WhatsAppIcon from "./components/common/Whatsapp";
import { Analytics } from "@vercel/analytics/react";

const Thankyou = lazy(() => import("./pages/Thankyou"));

AOS.init({
  once: true,
  duration: 1000,
});
export default function App() {
  return (
    <>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <Toaster />
          <ScrollToTop />
          {/* <WhatsAppIcon /> */}
          <TawkMessengerReact
            propertyId="679729cd825083258e0b7638"
            widgetId="1iij7mjca"
          />
          <Routes>
            {/* Website Pages */}
            {routes.map(({ component, name, path }, index) => (
              <Route
                path={path}
                element={
                  <>
                    <WebsiteHeader name={name} />
                    {component}
                    <WebsiteFooter />
                  </>
                }
              />
            ))}

            <Route path="/thankyou" element={<Thankyou />} />

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page={"web-development"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/app-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page={"app-development"} />
                  <LandingFooter />
                </>
              }
            />
          </Routes>
        </Suspense>
      </SpinnerContextProvider>
      <Analytics />
    </>
  );
}

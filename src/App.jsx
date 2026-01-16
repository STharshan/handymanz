import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Mot from "./page/ServicePage/Mot";
import Wheel from "./page/ServicePage/Wheel";
import Services from "./page/ServicePage/Services";
import Gear from "./page/ServicePage/Gear";
import Clutch from "./page/ServicePage/Clutch";
import Diagnostic from "./page/ServicePage/Diagnostic";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mot" element={<Mot />} />
        <Route path="/wheel-alignment" element={<Wheel />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gearbox" element={<Gear />} />
        <Route path="/clutch" element={<Clutch />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;

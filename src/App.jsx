import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  MyServiceSection,
  PortfolioSection,
  SideBar,
  TestimonialSection,
} from "./components/components";
import { BrowserRouter } from "react-router-dom";
import MouseTracker from "./components/MouseTracker";
function App() {
  return (
    <>
      <div className="bg-black relative">
        <BrowserRouter>
          <SideBar />
          <MouseTracker />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <MyServiceSection />
          <TestimonialSection />
          <ContactSection />
          <FooterSection />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

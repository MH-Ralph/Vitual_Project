import {
  FeatureSection,
  Footer,
  HeroSection,
  Navbar,
  PricingSection,
  Testimonials,
  WorkflowSection,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;

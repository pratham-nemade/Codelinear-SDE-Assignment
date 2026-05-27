import CaseStudies from "./component/CaseStudies";
import CoreBankingSection from "./component/CoreBankingSection";
import CTA from "./component/CTA";
import CTASection from "./component/CTASection";
import FeatureSection from "./component/FeatureSection";
import HeroSection from "./component/HeroSection";
import N7Footer from "./component/N7Footer";
import Navbar from "./component/Navbar";
import SolutionsSection from "./component/SolutionsSection";

function App() {
  return (
    <div className="bg-[#000D12]">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <FeatureSection/>
      <CTASection/>
      <CaseStudies/>
      <CTA/>
      <N7Footer/>
    </div>
  );
}

export default App;
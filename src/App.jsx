import Navbar from "./component/layout/Navbar";
import HeroSection from "./component/sections/HeroSection";
import SolutionsSection from "./component/sections/SolutionsSection";
import CoreBankingSection from "./component/sections/CoreBankingSection";
import FeatureSection from "./component/sections/FeatureSection";
import CTA from "./component/sections/CTA";
import DigitalBanking from "./component/sections/DigitalBanking";
import Insights from "./component/sections/Insights";
import CaseStudies from "./component/sections/CaseStudies";
import CTASection from "./component/sections/CTASection";
import N7Footer from "./component/layout/N7Footer";

function App() {
  return (
    <div className="bg-[#000D12]">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <FeatureSection/>
      <CTA/>
      <DigitalBanking/>
      <Insights/>
      <CaseStudies/>
      <CTASection/>
      <N7Footer/>
    </div>
  );
}

export default App;
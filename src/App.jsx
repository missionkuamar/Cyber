import CyberNavbar from "./components/CyberNavbar";
import GlitchHero from "./components/GlitchHero";
import NeonFoodCards from "./components/NeonFoodCards";
import DigitalMenu from "./components/DigitalMenu";
import ComboSection from "./components/ComboSection";
import CyberStory from "./components/CyberStory";
import RatingCards from "./components/RatingCards";
import OrderPanel from "./components/OrderPanel";
import NeonFooter from "./components/NeonFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <CyberNavbar />
      <main>
        <GlitchHero />
        <NeonFoodCards />
        <DigitalMenu />
        <ComboSection />
        <CyberStory />
        <RatingCards />
        <OrderPanel />
      </main>
      <NeonFooter />
    </div>
  );
}
import BestSelling from "./features/landing/components/composite/BestSelling";
import Hero from "./features/landing/components/composite/Hero";
import OurProducts from "./features/landing/components/composite/OurProducts";
import Footer from "./shared/components/composite/Footer";
import Header from "./shared/components/composite/Header";
import DesignerClothes from "./features/landing/components/composite/designer-clothes/DesignerClothes";
import FeedbackCorner from "./features/landing/components/composite/feedback-corner/FeedbackCorner";
import ExclusiveOffer from "./features/landing/components/composite/ExclusiveOffer";

function App() {
    return (
        <div className="min-h-screen bg-[#C2EFD4]">
            <Header />
            <Hero />
            <BestSelling />
            <OurProducts />
            <ExclusiveOffer />
            <DesignerClothes />
            <FeedbackCorner />
            <Footer />
        </div>
    );
}

export default App;

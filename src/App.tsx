import BestSelling from "./features/landing/components/composite/BestSelling";
import Hero from "./features/landing/components/composite/Hero";
import OurProducts from "./features/landing/components/composite/OurProducts";
import Footer from "./shared/components/composite/Footer";
import Header from "./shared/components/composite/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#C2EFD4]">
      <Header />
      <Hero />
      <BestSelling />
      <OurProducts />
      <Footer />
    </div>
  );
}

export default App;

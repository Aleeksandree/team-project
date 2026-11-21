import BestSelling from "./features/landing/components/composite/BestSelling";
import Hero from "./features/landing/components/composite/Hero";
import Header from "./shared/components/composite/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#C2EFD4]">
      <Header />
      <Hero />
      <BestSelling />
    </div>
  );
}

export default App;

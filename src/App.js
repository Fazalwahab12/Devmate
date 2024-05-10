import "./App.css";
import Agency from "./pages/Agency";
import Blogs from "./pages/Blogs";
import CommonSection from "./pages/CommonSection";
import Contect from "./pages/Contect";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home_slider from "./pages/Home_slider";
import { News } from "./pages/News";
import Our_clients from "./pages/Our_clients";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Trusted from "./pages/Trusted";
import We_works from "./pages/We_works";

function App() {
  return (
    <div>
      <Header />
      <Home_slider />

      <Services />
      <Agency />
      <We_works />
      <News />
      <Portfolio />
      <Trusted />
      <Team />
      <Our_clients />
      <CommonSection />

      <Contect />
      <Footer />
    </div>
  );
}

export default App;

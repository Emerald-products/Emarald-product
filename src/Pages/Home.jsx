import Hero from "../components/Hero";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import OtherProduct from "../components/OtherProduct";
import Product from "../components/Product";
import Review from "../components/Review";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Benefit />
      <OtherProduct />
      <Product />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;

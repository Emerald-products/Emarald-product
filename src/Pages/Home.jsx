import Hero from "../components/Hero";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import OtherProduct from "../components/OtherProduct";
import Product from "../components/Product";
import Review from "../components/Review";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Benefit />
      <OtherProduct />
      <Product />
      <Review />
    </div>
  );
};

export default Home;

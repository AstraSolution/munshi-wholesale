import BestSeller from "../../Components/HomeComonents/BestSeller/BestSeller";
import BuyNow from "../../Components/HomeComonents/BuyNow/BuyNow";
import Brands from "../../Components/HomeComonents/Brands/Brands";
import Category from "../../Components/HomeComonents/Category/Category";
import Category2 from "../../Components/HomeComonents/Category/Category2";
import Featured from "../../Components/HomeComonents/Featured/Featured";
import Hero from "../../Components/HomeComonents/Hero/Hero";
import Newsletter from "../../Components/HomeComonents/Newsletter/Newsletter";
import Offer from "../../Components/HomeComonents/Offer/Offer";
import Reviews from "../../Components/HomeComonents/Reviews/Reviews";
import Services from "../../Components/HomeComonents/Services/Services";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Category />
      <Category2 />
      <Offer />
      <BestSeller></BestSeller>
      <Featured></Featured>
      <BuyNow></BuyNow>
      <Brands />
      <Reviews />
      <Newsletter />
    </div>
  );
}

export default Home;

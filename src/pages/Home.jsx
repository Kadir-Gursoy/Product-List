
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ProductProvider } from "../contetx/ProductContext";

const Home = () => {


  return (
    <div>
      <ProductProvider> 
      <Header  />
      <ProductCard />

      </ProductProvider>
    </div>
  );
};

export default Home;

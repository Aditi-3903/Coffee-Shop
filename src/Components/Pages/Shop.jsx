
import { useLocation } from "react-router-dom";
import Cards from "../Mid-section/Cards";
import { products } from "../../data/data";

const Shop = () => {
  const location = useLocation();
  const apiProducts = location.state?.apiProducts || [];

 

  return (
    <main className="px-6 py-10 bg-[#751b0e] ">
      <h2 className="text-3xl font-bold mt-30 text-center text-white">
        Explore All Products
      </h2>

      

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 items-stretch ">
          
              {products.map((product) => (
            <Cards key={product.id} product={product}  imageFit="contain" />
          ))}
          
          {apiProducts.map((product) => (
            <Cards key={product.id} product={product}  imageFit="contain" />
          ))}
         
         
        </div>
     
    </main>
  );
};

export default Shop;
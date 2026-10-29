import { ArrowLeft, ArrowRight } from "lucide-react";
import Cards from "./Cards";
import { useRef } from "react";

const ProductSection = ({ title, products}) => {

  const sliderRef = useRef(null);
  

  const slideLeft = ()=>{
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  const slideRight = ()=>{
    sliderRef.current?.scrollBy({
      left: -300,
      behavior:"smooth"
    })
  }
  
  return (
    <section className="product-section py-10 lg:px-4 ">
      <h2  className="section-title mb-10 text-center lg:text-4xl md:text-3xl text-2xl font-semibold uppercase">
        {title}
      </h2>

      <div className="product-list flex items-center lg:justify-evenly justify-center gap-4  relative ">
        {/* Previous */}
        <button
          type="button" onClick={slideRight}
          className="product-arrow flex h-12 w-13  items-center justify-center rounded-full bg-[#F2D4BC] cursor-pointer hover:scale-110 sticky left-0  "
          aria-label={`Previous ${title}`} 
        >
          <ArrowLeft  />
        </button>

        {/* Products */}
        <div  ref={sliderRef} className="product-cards flex items-center justify-evenly gap-5 mr-16 shrink w-full  h-full overflow-x-hidden scroll-smooth  " >
          {products.map((product) => (
            <Cards key={product.id} product={product}  imageFit = "cover" />
          ))}
        </div>

        {/* Next */}
       <div className=" flex items-center justify-evenly  absolute  bg-white h-full w-auto right-0 ">
         <button
          type="button" onClick={slideLeft}
          className="product-arrow flex  h-12 w-12 items-center justify-center rounded-full bg-[#F2D4BC] cursor-pointer hover:scale-110 sticky   "
          aria-label={`Next ${title}`} 
        >
          <ArrowRight />
        </button>
       </div>
      </div>
    </section>
  );
};

export default ProductSection;
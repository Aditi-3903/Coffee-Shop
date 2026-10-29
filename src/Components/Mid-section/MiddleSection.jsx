import ProductSection from "./ProductSection";
import { products } from "../../data/data";
import sack from "../../assets/sack.png";
import Beans from "../../assets/beans.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const MiddleSection = ({coffeeRef}) => {
  const contentRef = useRef(null)

  useGSAP(()=>{
    const content = contentRef.current.querySelectorAll(".text-left")
    gsap.from(content, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
     

      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 60%",
        toggleActions: "play none none none ",
      },
    });
  })

  const [apiProducts, setApiProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  

  useEffect(()=>{
    const fetchProducts = async ()=>{
      try {
        const response = await fetch( "https://dummyjson.com/products?limit=30");

        if(!response.ok){
          throw new Error("failed to load data");
          
        }

        const data =await  response.json();

        setApiProducts(data.products)
        
      } catch (error) {
        setError(error.message);
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchProducts();
  },[])
  
   
  
  const coffeeProducts = products.filter(
    (product) => product.category === "coffee"
  );

  const dessertProducts = products.filter(
    (product) => product.category === "dessert"
  );

  const foodProducts = apiProducts.filter(
    (product) => product.category === "groceries"
  );
 

  return (
    <main className="font-poppins">
      {/* Coffee */}
     <section ref={coffeeRef}>
       <ProductSection 
        title="Our Special Coffee"
        products={coffeeProducts}
      />
     </section>

      {/* Dessert */}
      <ProductSection
        title="Our Special Dessert"
        products={dessertProducts}
      />
       {/* more Products*/}
     {
      isLoading?(
        <p className="text-3xl inline ml-[40%] font-semibold text-center bg-amber-200 p-5 ">loading more...</p>
      ):error?(
        <p className="text-sm text-red-500 text-center flex items-center ">{error}</p>
      ): (<ProductSection
        title="Explore More Products"
        products={foodProducts}
      />)
     }
     

      {/* Coffee Beans Banner */}
      <section  className="beans-banner mt-10  flex  min-h-60 w-full items-center md:justify-center lg:justify-between md:gap-5 justify-center bg-[#F2D4BC] lg:px-8  p-10 md:p-5 ">
        {/* Sack */}
        <div className="lg:h-50  lg:w-66 hidden lg:flex md:flex md:h-40 ">
          <img
            src={sack}
            alt="Coffee bean sack"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="beans-content ">
          <h2 className="lg:text-left lg:text-4xl text-xl text-center  w-auto font-semibold leading-tight">
            Check Out Our Best
            <br />
            Coffee Beans
          </h2>

        
            <button onClick={()=>{
              navigate("/shop",{
                state:{products}
              })
            }}
            type="button"
            className="mt-3 flex items-center justify-center gap-2 cursor-pointer rounded-full bg-amber-950 px-8  py-2 lg:text-2xl text-sm font-bold text-white  transition-transform duration-300 hover:scale-105 "
          >
            Explore Our Products
            <MdKeyboardDoubleArrowRight className="scale-150" />
          </button>
        
        </div>

        {/* Beans */}
        <div className="lg:h-40 h-20  w-70    ">
          <img
            src={Beans}
            alt="Coffee beans"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
};

export default MiddleSection;
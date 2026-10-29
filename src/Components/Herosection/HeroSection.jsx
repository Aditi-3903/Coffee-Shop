import heroImg from "../../assets/heroImg.jpg";
import CategorySection from "./CategorySection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const HeroSection = ({onOrder}) => {

  const heroRef = useRef(null)

  useGSAP(()=>{
    gsap.from(heroRef.current,{
      x:-100,
      opacity:0,
      duration:0.5,
      delay:0.7,
    });
    
  })
  return (
    <>
      <section className="relative flex lg:h-screen  items-center justify-center overflow-hidden px-10 font-poppins">
        
        {/* Hero Background */}
      <div className="h-screen w-screen">
          <img
          src={heroImg}
          alt="Coffee"
          className="absolute inset-0   h-full  w-full object-cover brightness-70"
        />
      </div>

        {/* Hero Content */}
        <div ref={heroRef} className="hero-content relative lg:right-180 md:right-70 sm:right-50 sm:top-10 z-10  lg:top-10  md:top-10  text-left text-white ">
          <p className="hero-subtitle mb-3 lg:text-4xl  text-2xl font-semibold">
            Welcome!
          </p>

          <h1 className="hero-title lg:text-5xl md:text-3xl sm:text-2xl text-4xl  w-full font-bold leading-tight  ">
            We serve the richest coffee in the city!
          </h1>

          <p className="hero-description mx-auto mt-3 lg:max-w-xl lg:text-base text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quibusdam, facilis Lorem, ipsum dolor.
          </p>

          <button 
            type="button"
            className="hero-button mt-3 rounded-full bg-white lg:px-8  px-4 lg:py-3 py-2 lg:text-xl text-base font-semibold text-black transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={onOrder}
          >
            Order Now
          </button>
        </div>
      </section>

      <CategorySection />
    </>
  );
};

export default HeroSection;
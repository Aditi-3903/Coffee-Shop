import { PiCoffeeFill } from "react-icons/pi";
import { MdCake } from "react-icons/md";
import { TbCookie } from "react-icons/tb";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const CATEGORIES = [
  {
    id: 1,
    name: "Hot Coffee",
    icon: PiCoffeeFill,
  },
  {
    id: 2,
    name: "Dessert",
    icon: MdCake,
  },
  {
    id: 3,
    name: "Cookies",
    icon: TbCookie,
  },
  {
    id: 4,
    name: "Cold Coffee",
    icon: BiSolidCoffeeTogo,
  },
];

const CategorySection = () => {
  const categoryRef = useRef(null)

  useGSAP(()=>{
    const elements = categoryRef.current.querySelectorAll(".category-icon")
    gsap.from(elements, {
      y: -100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
     

      scrollTrigger: {
        trigger: categoryRef.current,
        start: "top 70%",
        toggleActions: "play none none none ",
      },
    });
  })
  return (
    
    <section ref={categoryRef}  className="category-section flex lg:min-h-40  items-center justify-center gap-6 bg-[#F2D4BC] px-6 font-poppins lg:gap-26 md:gap-20">
      {CATEGORIES.map((category) => {
        const Icon = category.icon;

        return (
          <div 
            key={category.id}
            className="category flex h-30  flex-col items-center md:items-center justify-center"
          >
            
            
            <Icon className="category-icon lg:h-20 h-10 lg:w-20 w-10 text-[#751b0e]" />

            <h2 className="category-title text-center lg:text-lg text-sm text-[#751b0e]">
              {category.name}
            </h2>
          </div>
          
        );
      })}
    </section>
   
  );
};

export default CategorySection;
import React, { useRef } from 'react'
import Navbar from '../Header/Navbar'
import HeroSection from '../Herosection/HeroSection'
import MiddleSection from '../Mid-section/MiddleSection'
import Endsection from '../Endsection/Endsection'
import Footer from '../Footer/Footer'

const Home = () => {
    const coffeeRef = useRef(null);
  

  const orderBtn = ()=>{
      console.log("Order button clicked");
    console.log("Coffee element:", coffeeRef.current);
    coffeeRef.current?.scrollIntoView({
      behavior:"smooth",
      block: "start"
    });
  };

  return (
     <div className="min-h-screen w-full overflow-x-hidden font-poppins">
      {/* <Navbar /> */}

      <main>
        <HeroSection onOrder={orderBtn} />
        <MiddleSection coffeeRef={coffeeRef}  />
        <Endsection />
      </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Home
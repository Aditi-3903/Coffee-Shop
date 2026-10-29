import { Route, Routes } from "react-router-dom";
import Coffee from "./Components/Pages/Coffee";
import Home from "./Components/Pages/Home";
import Bakery from "./Components/Pages/Bakery";
import Shop from "./Components/Pages/Shop";
import About from "./Components/Pages/About";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/Header/LogIn";
import SignUp from "./Components/Header/SignUp";

const App = () => {


  return (
  <>
<Navbar/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/coffee" element={<Coffee />} />
  <Route path="/bakery" element={<Bakery />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/about" element={<About />} />
   <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
</Routes>

<Footer/>
</>
    
  );
};

export default App;
import React, { useContext, useState } from 'react'
// import { dataContext } from '../context/UserContext'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  // const {serverURL,userDATA,setUserDATA,getUserdata} = useContext(dataContext)
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e)=>{
   e.preventDefault()
   try {
    const data = await axios.post(serverURL + "/login",{
      email,
      password,
    },{withCredentials:true});
    
    setUserDATA(data.user);
  await  getUserdata();
     navigate("/")
     }
    catch (error) {
   alert(error.response.data.message)
   }
   
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center  bg-[#751b0e] ">
      
      <div className="flex items-center justify-center  flex-col h-auto  w-100 p-5  rounded-2xl border-2 border-gray-300 bg-amber-950 md:mt-25 md:mb-20 ">

        <h1 className="text-cyan-600 font-bold text-3xl mb-5 ">Log In</h1>

       <form className=" flex items-center justify-between sm:flex-nowrap flex-wrap flex-col gap-5 " onSubmit={handleLogin}>
         <input type="email" placeholder="email" value={email} className=" h-full w-full  p-3 rounded-2xl bg-gray-300" onChange={(e)=>{
            setEmail(e.target.value)
          }}></input>

            <input type="password" placeholder="password" value={password} className=" h-full w-full p-3 rounded-2xl bg-gray-300" onChange={(e)=>{
            setPassword(e.target.value)
          }}></input>

        <button className="px-10 py-2 bg-cyan-700 rounded-2xl text-gray-100 hover:scale-110 transition-all cursor-pointer" onClick={()=>
          {navigate("/")}}>
          Log In
        </button>
         <p className="text-gray-100" onClick={()=>
          {navigate("/signup")}
        }>Don't have an account? <span className="text-cyan-400 hover:underline cursor-pointer">Signup</span></p>

       </form>
      </div>

    </div>
  );
}

export default LogIn
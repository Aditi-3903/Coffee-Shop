import { useContext, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";


const SignUp = () => {
 
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const selectfile = useRef(null);


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let formdata = new FormData();
      formdata.append("firstName", firstName);
      formdata.append("lastName", lastName);
      formdata.append("userName", userName);
      formdata.append("email", email);
      formdata.append("password", password);
     
      navigate("/login")
  
    } catch (error) {
      setUserDATA(null)
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center  bg-[#751b0e] ">
      <div className="flex items-center justify-center flex-col h-auto  w-100 p-5  rounded-2xl border-2 border-gray-300 bg-amber-950 mt-30 mb-20">
        <h1 className="text-cyan-600 font-bold text-3xl mb-5 ">Sign Up</h1>

        <form
          className=" flex items-center justify-between sm:flex-nowrap flex-wrap flex-col gap-5 "
          onSubmit={handleSignup}
        >
          {/* <input type="file" hidden ref={selectfile} onChange={handleImg} /> */}

          <div className="h-30 w-30  border- border-white flex items-center justify-center overflow-hidden  bg-gray-300 rounded-full">
            {/* <img src={frontImg} className="h-full w-full object-fill " /> */}
            <div
              className=" absolute h-30 w-30 rounded-full flex items-center justify-center text-2xl bg-gray-400 opacity-0 hover:opacity-50 cursor-pointer  border-2 border-white"
              onClick={() => selectfile.current.click()}
            >
              +
            </div>
          </div>

          <div className=" h-full w-full flex  justify-center items-center gap-2 ">
            <input
              type="text"
              placeholder="Firstname"
              value={firstName}
              className=" p-3 rounded-2xl bg-gray-300 w-1/2 sm:w-full "
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>

            <input
              type="text"
              placeholder="Lastname"
              value={lastName}
              className=" p-3 rounded-2xl bg-gray-300 w-1/2 sm:w-full"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            className="h-full w-full p-3 rounded-2xl bg-gray-300"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>

          <input
            type="email"
            placeholder="email"
            value={email}
            className=" h-full w-full  p-3 rounded-2xl bg-gray-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <input
            type="password"
            placeholder="password"
            value={password}
            className=" h-full w-full p-3 rounded-2xl bg-gray-300"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <button className="px-10 py-2 bg-cyan-700 rounded-2xl text-gray-100 hover:scale-110 transition-all cursor-pointer"onClick={() => navigate("/login")}>
            Sign Up
          </button>
          <p className="text-gray-100">
            Already have an account?{" "}
            <span
              className="text-cyan-400 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

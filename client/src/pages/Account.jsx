import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(0);
  const[credits,setCredits]=useState(0);
   const[payment,setPayment]=useState(0);

   const handlePayment=(e)=>{
    e.preventDefault();
    navigate("/home")
   }

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername && storedUsername !== "undefined") {
      setUsername(storedUsername);
    }
  }, []);
  useEffect(()=>{
    const savedusername= localStorage.getItem("username");
    if(savedusername){
    const savedCount = localStorage.getItem(`count_${savedusername}`);
    if(savedCount) setCount(Number(savedCount))
    const credits = savedCount*20;
    if(credits) setCredits(Number(credits))
    const payment = savedCount*2000;
    if(payment) setPayment(Number(payment))}
    },[])

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-[#e0f4f9] via-[#d4eef5] to-[#c8e8f1]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#67C6E3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#4FB3D9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#378BA4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        
        <form onSubmit={handlePayment}>
          <img src="/images.png" alt="Logo" className="w-32 h-32 mb-4" />
          <h2 className="text-2xl font-semibold">
          Username:{" "}
          <span className="text-blue-400">
            {username ? username : "Not logged in"}
          </span>
         </h2>
         <br></br>
        <h2 className="text-2xl font-semibold">
          Patients Attended:{" "}
          <span className="text-blue-400">
            {count}
          </span>
        </h2>
        <br></br>
        <h2 className="text-2xl font-semibold">
          Credits Earned:{" "}
          <span className="text-blue-400">
            {credits}
          </span>
        </h2>
        <br></br>
        <h2 className="text-2xl font-semibold">
          Payment Due:{" "}
          <span className="text-blue-400">
            {payment}
          </span>
        </h2>
        <br></br>
        {payment>=0 && (
          <div>
            <button type="submit" className="px-5 py-2 bg-gradient-to-r from-[#67C6E3] to-[#4FB3D9] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              Request Payment </button>
          </div>
        )}
        </form>
          
      
        
        
      </div>
    </div>
      
    </>
  );
};

export default Account;

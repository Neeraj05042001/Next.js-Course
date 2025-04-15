"use client"
import { useRouter } from "next/navigation";

const Home = () => {
  
  const router = useRouter()

  return (
    <div className=" text-center  ">
      <h1 className="text-9xl font-bold my-10 ">Home</h1>
      <p className="text-3xl font-semibold">This is the home Page</p>

{/*  Additonal practise of routing using use-router and link */}
      <div className="shadow-2xl max-w-5xl mx-auto rounded-lg bg-gradient-to-l  from-red-100 to-red-400 ">
        <h2 className="text-4xl font-semibold my-10">
          Routing using use Router
        </h2>
        <div className="flex flex-col items-center ">
          <button onClick={()=>router.push("/userinfo")} className="p-4 font-semibold rounded-lg shadow-xl mb-10 bg-gradient-to-r from-green-200 to-green-700 cursor-pointer ">
            User Info
          </button>
          <button onClick={()=>router.push("/login")} className="p-4 font-semibold rounded-lg shadow-xl mb-10 bg-gradient-to-r from-green-200 to-green-700 cursor-pointer ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

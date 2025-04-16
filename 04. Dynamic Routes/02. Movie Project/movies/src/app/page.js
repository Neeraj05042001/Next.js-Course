"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="max-w-7xl">
      <div className="w-xl flex items-center justify-center  bg-gradient-to-b from-green-300 to-red-400 shadow-lg rounded-lg">
        <button
          onClick={router.push("/dashboard")}
          className="p-2 shadow-lg rounded-lg bg-gradient-to-l from-green-200 to-blue-400 cursor-pointer"
        >
          Go to dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;

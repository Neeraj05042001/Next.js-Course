"use client"

import { useRouter } from "next/navigation";

const UserInfo = () => {
    const router = useRouter()
    return (
      <div className=" text-center  ">
        <h1 className="text-9xl font-bold my-10 ">User Info</h1>
        <p className="text-3xl font-semibold">This is the User Info Page</p>
        <button onClick={()=>router.back()} className="p-4 mt-10 font-semibold rounded-lg shadow-xl mb-10 bg-gradient-to-r from-green-200 to-green-700 cursor-pointer ">
            Go Back
          </button>
      </div>
    );
  };
  export default UserInfo;
  
"use client";

import { useRouter } from "next/navigation";

const Page2 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center mt-25"> page 2</h1>
      <p className="text-3xl font-semibold my-10">
        Welcome to page 2 for leraning use Router.
      </p>

      <button
        onClick={() => router.back()}
        className="cursor-pointer bg-gradient-to-r from-red-300 to-red-600 p-4 rounded-lg shadow-xl"
      >
        Go to page 2
      </button>
    </div>
  );
};

export default Page2;

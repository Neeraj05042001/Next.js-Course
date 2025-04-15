"use client";
import { useRouter } from "next/navigation";

const Page1 = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(`/${page}`)
  };
  return (
    <div className="flex flex-col  items-center">
      <h1 className="text-6xl font-bold text-center mt-20"> Page 1</h1>
      <p className="text-3xl font-semibold my-10">
        Welcome to the Page 1 of learning use Router hook.
      </p>
      <button
        onClick={() => navigate("page2")}
        className="cursor-pointer bg-gradient-to-r from-green-300 to-green-600 p-4 rounded-lg shadow-xl"
      >
        Go to page 2
      </button>
    </div>
  );
};

export default Page1;


import Link from "next/link";
const Home = () => {
  return (
    <div className="text-center my-12">
      <h1 className="text-8xl font-bold mb-8">Home</h1>

      <Link href="products">
        <span className=" bg-green-200 rounded-lg p-4 shadow-lg">
           Products
        </span>
      </Link>
    </div>
  );
};

export default Home;

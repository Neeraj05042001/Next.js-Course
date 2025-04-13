import Link from "next/link";
const Products = () => {
  return (
    <div className="text-center my-8 ">
      <h1 className="text-4xl font-bold mb-10">Products</h1>
      <div className="  flex flex-col justify-center items-center">
      <Link  className="flex" href="products/allproducts">
        <span className=" bg-green-200 rounded-lg p-4 shadow-lg">
          All Products
        </span>
      </Link>

      <Link className="flex mt-5" href="products/specificproducts">
        <span className=" bg-green-200 rounded-lg p-4 shadow-lg">
          Specific Products
        </span>
      </Link>
      </div>
    </div>
  );
};

export default Products;

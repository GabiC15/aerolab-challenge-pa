import Product from "./Product";
import Navbar from "./Navbar";
import useProducts from "../hooks/use-products";
import Footer from "./Footer";
import HeaderImage from "../assets/header.png";

export default function ProductList() {
  const { products, order, setOrder } = useProducts();

  return (
    products && (
      <>
        <Navbar title="Electronics" />

        <div className="relative">
          <img src={HeaderImage}></img>
          <h2 className="absolute text-6xl font-semibold text-white bottom-16 left-36">
            Electronics
          </h2>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="inline-flex items-center">
            <p className="pr-4 text-lg font-normal text-gray-500">
              {products.length} of {products.length} products
            </p>
            <div className="inline-block h-[35px] w-0.5 self-stretch bg-neutral-200 opacity-100"></div>

            <p className="pr-4 pl-4 text-lg font-normal text-gray-500">
              Sort by:
            </p>

            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setOrder("")}
                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
                  "" == order ? "bg-gray-200" : ""
                }`}
              >
                Most Recent
              </button>
              <button
                type="button"
                onClick={() => setOrder("LOWEST_PRICE")}
                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
                  "LOWEST_PRICE" == order ? "bg-gray-200" : ""
                }`}
              >
                Lowest Price
              </button>
              <button
                type="button"
                onClick={() => setOrder("HIGHEST_PRICE")}
                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
                  "HIGHEST_PRICE" == order ? "bg-gray-200" : ""
                }`}
              >
                Highest Price
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product, i) => (
                <Product product={product} key={i} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  );
}

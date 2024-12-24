import { useContext } from "react";
import ProductHolder from "../components/ProductHolder";
import { CartContext } from "../context/context";

const Home = () => {
  const { productItems } = useContext(CartContext);
  return (
    <main className="w-full min-h-screen px-12 py-20 flex flex-col">
      <h3 className="text-2xl text-black-300 mb-10 text-center">
        Yours Product
      </h3>
      <div className="flex flex-col gap-y-3 items-center justify-center">
        {productItems &&
          (productItems.length > 0 ? (
            productItems.map((product) => (
              <ProductHolder key={product.id} prop={product} />
            ))
          ) : (
            <p className="text-2xl mt-10">Loading...</p>
          ))}
      </div>
    </main>
  );
};

export default Home;

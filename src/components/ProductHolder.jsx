/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../context/context";

const ProductHolder = ({ prop }) => {
  const {
    id,
    category,
    image,
    price,
    title,
    description,
    rating: { rate, count },
  } = prop;

  const { handleAddToCart, cartItems, handleDeleteFromCart } =
    useContext(CartContext);

  const alreadyInCart = cartItems.filter((item) => item.id === id);
  return (
    <div className="flex gap-x-6 max-w-[1000px] border-2 rounded-xl py-3 px-2">
      <img
        src={image}
        alt={`image of ${title}`}
        className="rounded-full aspect-square w-36 h-36 object-cover"
      />
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl text-black">{title}</h1>
        <h3 className="font-bold">{price}</h3>
        <span className="capitalize ">{category}</span>
        <span>{description}</span>
        <div>
          <h2 className="text-yellow-200">{rate}*</h2>
          <span className="font-semibold">{count} - people bought</span>
        </div>

        {alreadyInCart.length > 0 ? (
          <button
            onClick={() => handleDeleteFromCart(id)}
            className="px-4 py-2 bg-black text-white rounded-xl  mt-6 cursor-pointer hover:bg-black/70"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(prop)}
            className="px-4 py-2 bg-black text-white rounded-xl  mt-6 cursor-pointer hover:bg-black/70"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductHolder;

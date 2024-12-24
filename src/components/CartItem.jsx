import { useContext } from "react";
import { CartContext } from "../context/context";

const CartItem = (prop) => {
  const { id, image, title, price, quantity } = prop;

  const { handleItemQuantity, handleDeleteFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-6 border-2 rounded-xl py-3 px-2">
      <img
        src={image}
        alt={`image of ${title}`}
        className="rounded-full aspect-square w-36 h-36 object-cover"
      />
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold">{title}</h1>
        <h3 className="font-semibold">{price}</h3>

        <div className="flex gap-x-2">
          <button
            onClick={() => handleItemQuantity(id, "dec")}
            className="px-3 rounded-lg font-bold bg-gray-300"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleItemQuantity(id, "inc")}
            className="px-3 rounded-lg font-bold bg-gray-300"
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleDeleteFromCart(id)}
          className="px-4 py-2 bg-black text-white rounded-xl  mt-6 cursor-pointer hover:bg-black/70 max-w-40"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;

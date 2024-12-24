import { useContext } from "react";
import { CartContext } from "../context/context";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="w-full flex px-3">
      <main className="w-2/3 min-h-screen px-10 py-20 flex flex-col">
        <h3 className="text-2xl text-black-300 mb-10 text-center">
          Your Carts
        </h3>
        <div className="flex flex-col gap-y-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const { image, id, title, quantity, price } = item;
              return (
                <CartItem
                  key={id}
                  image={image}
                  title={title}
                  quantity={quantity}
                  price={price}
                  id={id}
                />
              );
            })
          ) : (
            <p className="text-xl text-center ">Cart is empty</p>
          )}
        </div>
      </main>
      <CartTotal />
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import { CartContext } from "../context/context";

const CartTotal = () => {
  const { total } = useContext(CartContext);

  return (
    <aside className="w-1/3 border flex flex-col gap-y-3 rounded-md px-3 py-4 max-h-[300px] mt-[151px]">
      <p className="text-center text-2xl ">Total</p>
      <div className=" flex flex-col mt-6 gap-y-3">
        <span className="font-semibold">
          Total Product: {total.totalQuantity}
        </span>
        <span className="font-semibold">
          Total Price : {total.totalPrice.toFixed(2)} $
        </span>
      </div>
    </aside>
  );
};

export default CartTotal;

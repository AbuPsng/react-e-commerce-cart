import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex justify-between fixed w-full py-3 px-10  bg-slate-700 gap-x-2 items-center">
      <Link to={"/"}>
        <h1 className="text-2xl capitalize text-white">home</h1>
      </Link>
      <div className="flex gap-x-3 pr-3">
        <Link to={"/cart"}>
          {" "}
          <CiShoppingCart className="w-8 h-8 text-white" />
        </Link>
        <span className="text-white text-lg">
          {cartItems.length > 0 && cartItems.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

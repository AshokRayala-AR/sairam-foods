import Logo from "../../../../assets/images/logo.png";
import Search from "../../../../assets/images/search.png";
import User from "../../../../assets/images/user.png";
import Cart from "../../../../assets/images/shopping-cart.png";
export default function HeaderComp() {
  return (
    <div className="flex justify-between px-5 items-center">
      <div className="w-full max-h-[150px] ">
        <img src={Logo} alt="" className="h-[150px] " />
      </div>
      <ul className="flex w-full gap-4">
        <li>Home</li>
        <li>Shop</li>
        <li>Gifts</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <ul className="flex w-full justify-center ">
        <div className="flex gap-10">
          <li>
            <img src={Search} alt="" className="w-5" />
          </li>
          <li>
            <img src={User} alt="" className="w-5" />
          </li>
          <li>
            <img src={Cart} alt="" className="w-5" />
          </li>
        </div>
      </ul>
    </div>
  );
}

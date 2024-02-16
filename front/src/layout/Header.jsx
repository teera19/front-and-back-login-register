import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  { to: "/", text1: "" },
  { to: "/profile", text2: "" },
  { to: "/new", text3: "Create" },
  { to: "/buy", text4: "" },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar flex text-white ">
      <div className="ml-[1100px] flex flex-row mt-5">
        <ul className="flex flex-row gap-4">
          {user?.id && (
            <div>
              <Link to="/profile">
                <FaUser
                  size={20}
                  className="text-white inline-block text-center absolute ml-[-110px]"
                />
              </Link>
              <div>
               <Link to="/buy">
                <FaShoppingCart
                  size={22}
                  className="text-white inline-block text-center absolute ml-[-160px] "
                  
                />
                </Link>
              </div>
              <div>
                <div className="text-white inline-block text-center absolute ml-[-70px] ">
                  <Link to="/">สินค้าทั้งหมด</Link>
                </div>
                <li className=" ml-24">
                  <Link to="#" onClick={hdlLogout}>
                    Logout
                  </Link>
                </li>
                <li className=" mt-[-24px] ml-8">
                  {finalNav.map((el) => (
                    <Link to={el.to}>{el.text3}</Link>
                  ))}
                </li>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

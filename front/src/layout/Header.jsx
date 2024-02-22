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
  { to: "/new", text3: "" },
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
    <div className="navbar flex text-white bg-sky-400 p-5">
      <div className="ml-[1100px] flex flex-row mt-5">
        <ul className="flex flex-row gap-4">
          {user?.id && (
            <div>
              <Link to="/profile">
                <FaUser
                  size={20}
                  className="rounded-lg  text-white inline-block text-center absolute ml-[-110px] hover:bg-red-100  transition-transform transform-gpu hover:scale-125 bg-cover bg-center"
                />
              </Link>
              <div>
               <Link to="/buy">
                <FaShoppingCart
                  size={22}
                  className="rounded-lg  text-white inline-block text-center absolute ml-[-160px]  hover:bg-red-100 transition-transform transform-gpu hover:scale-125 bg-cover bg-center"
                  
                />
                </Link>
              </div>
              <div>
                <div className="text-white inline-block text-center absolute ml-[-70px]  hover:bg-red-100 transition-transform transform-gpu hover:scale-125 bg-cover bg-center rounded-lg ">
                  <Link to="/">สินค้าทั้งหมด</Link>
                </div>
                <div className=" text-white inline-block text-center absolute ml-8  hover:bg-red-100 transition-transform transform-gpu hover:scale-125 bg-cover bg-center rounded-lg ">
                  <Link to="/new">Create</Link>
                </div>
                <li className=" ml-24  hover:bg-red-100 transition-transform transform-gpu hover:scale-125 bg-cover bg-center rounded-lg " >
                  <Link to="#" onClick={hdlLogout}>
                    Logout
                  </Link>
                </li>
                
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

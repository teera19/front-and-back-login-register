import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from 'react-icons/fa';

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  { to: "/", text: "Home" },
  { to: "/new", text1: "Create" },
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
    <div className="navbar flex text-white">
      <ul>
          {finalNav.map((el) => (
            <ul key={el.to}>
              <li className="m-5 ml-[520px]">
              <Link to={el.to}>{el.text1 ? <FaUser className="inline-block mr-2 mb-1" /> : null}
                  {el.text1}</Link>
              </li>
            </ul>
          ))}
          {user?.id && (
            <li>
              
              <Link to="#" onClick={hdlLogout}>
                Logout
              </Link>
            </li>
          )}
        
      </ul>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8000/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8000/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  
const navigate = useNavigate();
const hdlRegister = () => {
  navigate('/register');
};

  return (
    <div className="flex justify-end p-5 w-4/6 min-w-[300px] min-h-[350px] mx-auto rounded mt-5">
      <div className=" font-bold flex flex-col items-start m-11  gap-2 w-full max-w-xs text-5xl mt-[200px]"><h1>Welcome <br />
           to
      SHOP PC <hr /></h1> </div>
      <form
        className="flex flex-col items-end m-11  gap-2 w-full max-w-xs"
        onSubmit={hdlSubmit}
      >
        <div
          className="text-3xl mb-5 text-back "
          style={{ textShadow: "0 0 0.5rem orange" }}
        >
          Please Login
        </div>
        <label className="form-control">
          <span
            className="label-text text-back m-5"
            style={{ textShadow: "0 0 0.5rem orange" }}
          >
            Username
          </span>
          <input
            type="text"
            className="input input-bordered min-w-[350px]"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control">
          <span
            className="label-text text-back m-5"
            style={{ textShadow: "0 0 0.5rem orange" }}
          >
            Password
          </span>
          <input
            type="password"
            className="input input-bordered min-w-[350px]"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <div>
          <button type="submit" className="btn btn-outline m-3 text-back">
          Login
          </button>
        </div>
        <div className="flex row-auto">
        <p className="mt-8 text-back" style={{ textShadow: "0 0 0.5rem orange" }} >You don't have accounts?</p>
          <p className=" btn-link m-5 mt-8 " onClick={hdlRegister} >
          Register ?
          </p>
        </div>
      </form>
    </div>
  );
}
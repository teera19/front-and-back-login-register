import axios from "axios";
import { useState } from "react";
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
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-end p-5 w-4/6 min-w-[800px] min-h-[650px] mx-auto rounded mt-5">
      <form
        className="flex flex-col items-end m-11  gap-2 w-full max-w-xs"
        onSubmit={hdlSubmit}
      >
        <div
          className="text-3xl mb-5 text-white "
          style={{ textShadow: "0 0 0.5rem orange" }}
        >
          Please Login
        </div>
        <label className="form-control">
          <span
            className="label-text text-white m-5"
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
            className="label-text text-white m-5"
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
          <button type="submit" className="btn btn-outline btn-info m-5">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

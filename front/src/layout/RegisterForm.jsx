import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert("Please check confirm password");
      }
      const rs = await axios.post("http://localhost:8000/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("Register Successful");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-end p-5  w-4/6 min-w-[800px] min-h-[650px] mx-auto rounded mt-5 ">
      <form
        className="flex flex-col items-end m-8  gap-2 w-full max-w-xs"
        onSubmit={hdlSubmit}
      >
        <div
          className="text-3xl mb-5  text-white "
          style={{ textShadow: "0 0 0.5rem orange" }}
        >
          Register Form
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className="label-text  text-white "
              style={{ textShadow: "0 0 0.5rem orange" }}
            >
              username
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs min-w-[350px]"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className="label-text  text-white "
              style={{ textShadow: "0 0 0.5rem orange" }}
            >
              E-mail
            </span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs min-w-[350px]"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className="label-text  text-white "
              style={{ textShadow: "0 0 0.5rem orange" }}
            >
              password
            </span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs min-w-[350px]"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className="label-text  text-white "
              style={{ textShadow: "0 0 0.5rem orange" }}
            >
              Confirm Password
            </span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs min-w-[350px]"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <div>
          <button type="submit" className="btn btn-outline btn-info m-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

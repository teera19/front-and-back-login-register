import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div>
      <h1 className="text-white flex justify-center text-5xl font-bold mt-32 ">
        Hello Guest
      </h1>
      <div className="flex justify-center items-center h-screen mt-[-240px]">
        <button className="btn btn-active btn-secondary w-[200px] rounded-3xl overflow-hidden relative">
          <Link to="/login" className="absolute inset-0 flex justify-center items-center transition-all duration-300 hover:scale-110"> Get Start</Link>
        </button>
      </div>
    </div>
  );
}

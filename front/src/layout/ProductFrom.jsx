import axios from "axios";
import { useState } from "react";

export default function ProductForm() {
  const [input, setInput] = useState({
    title: "",
    detail: "",
    price: "",
    image: null
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setInput((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", input.title);
      formData.append("detail", input.detail);
      formData.append("price", input.price);
      formData.append("image", input.image); 
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/products", 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(error.response.data);

    }
  };

  return (
    <form
      className="flex flex-col min-w-[600px] rounded w-5/6 mx-auto p-4 gap-6 m-10 mt-[120px]"
      onSubmit={hdlSubmit}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-white">Title</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="title"
          value={input.title}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-white">Detail</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="detail"
          value={input.detail}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-white">Price</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="price"
          value={input.price}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-white">Image</span>
        </div>
        <input
          type="file"
          accept="image/*"
          className="input input-bordered w-full"
          onChange={handleImageChange}
        />
      </label>
      <button type="submit" className="btn btn-primary mt-5">Add new</button> 
    </form>
  );
}

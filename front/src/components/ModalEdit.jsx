import axios from "axios";
import { useState, useEffect } from "react";

export default function ModalEdit(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    title: el?.title || "",
    detail: el?.detail || "",
    price: el?.price || "",
    image: null,
  });
  const [status, setStatus] = useState([])

  useEffect( ()=> {
    let allStatus = JSON.parse(localStorage.getItem('status'))
    if(allStatus) {
      return setStatus(allStatus)
    }

  }, [] )

  useEffect(() => {
    setInput({
      title: el?.title || "",
      detail: el?.detail || "",
      price: el?.price || "",
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setInput((prev) => ({ ...prev, image: e.target.files[0] }));
  };


  const hdlSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(); 
    formData.append("title", input.title);
    formData.append("detail", input.detail);
    formData.append("price", input.price);
    formData.append("image", input.image);

    console.log(formData)


    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:8000/products/${el.id}`,
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" 
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(error.response.data);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-6" onSubmit={hdlSubmit}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Product title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              name="title"
              value={input.title}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Detail</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              name="detail"
              value={input.detail}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
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
          <button type='submit' className="btn btn-primary" onClick={closeModal}>Update</button>
          <button type='button' className="btn btn-secondary" onClick={closeModal}>Cancel</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

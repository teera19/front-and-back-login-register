import axios from "axios";
import { useState, useEffect } from "react";

export default function ModalEdit(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    title: "",
    detail: "",
    price: "",
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
      title: el?.title,
      detail: el?.title,
      price: el?.price,
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      const output = { ...input };
      const token = localStorage.getItem("token");
      const rs = await axios.put(`http://localhost:8000/products/${el.id}`, output, {
        headers : { Authorization : `Bearer ${token}`}
      })
      
      setTrigger(prv => !prv)
    } catch (err) {
      alert(err.message);
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
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              name="price"
              value={input.price}
              onChange={hdlChange}
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

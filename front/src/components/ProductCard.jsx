import axios from "axios";
import React from "react";

export default function ProductCard(props) {
  const { el, openModal, setTrigger } = props;

  const statusColor =  'bg-pink-300' 
    'bg-blue-300' , 'bg-lime-300'
  const hdlDelete = async e => {
    try {
      e.stopPropagation()
      const token = localStorage.getItem('token')
      let rs = await axios.delete(`http://localhost:8000/products/${el.id}`, {
        headers : { Authorization : `Bearer ${token}`}
      })

      setTrigger(prv=>!prv)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className={`card w-5/6 ${statusColor} shadow-xl mx-auto cursor-pointer
      active:shadow-none active:translate-x-2 active:translate-y-1`}
      onClick={() => openModal(el.id)}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{el.title}</h2>
          <div className="badge badge-secondary" onClick={hdlDelete}>delete</div>
        </div>
        <div className="flex">
          <p className="text-right">Detail : {el.detail}</p>
          <p className="text-right">Price : {el.price}</p>
        </div>
      </div>
    </div>
  );
}

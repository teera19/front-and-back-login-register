import axios from "axios";
import React from "react";

export default function BuyCard(props) {
  const { el, openModal, setTrigger } = props;

  const statusColor = "bg-white";
  
  return (
    <div className="flex justify-center ">
      <div
        className={`card ${statusColor} `}
        onClick={() => openModal(el.id)}
      >
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{el.title}</h2>
            <div className="badge badge-secondary" >
              Buy
            </div>
          </div>
          <div className="flex flex-col">
            {el.imageUrl && (
              <img src={el.imageUrl} alt={el.title} className=" w-[300px]" />
            )}
            <p className="text-right">Detail : {el.detail}</p>
            <p className="text-right">Price : {el.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";

const BuyCard = ({ el }) => {
  const { setSelectedProduct } = useProduct();
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`card bg-white  hover:bg-red-100  hover: bg-cover bg-center rounded-lg`}
        onClick={() => {
          setSelectedProduct(el);
          setSelected(!selected);
        }}
      >
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{el.title}</h2>
            <div
              className="inline-flex items-center  bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10  hover:bg-red-100 transition-transform transform-gpu hover:scale-125 bg-cover bg-center rounded-lg "
              onClick={() => {
                setSelectedProduct(el);
                setSelected(!selected);
              }}
            >
              หยิบใส่ตะกร้า
            </div>
          </div>
          <div className="flex flex-col ">
            {el.imageUrl && (
              <img src={el.imageUrl} alt={el.title} className="w-[300px]" />
            )}
            <p className="text-right">Detail : {el.detail}</p>
            <p className="text-right">Price : {el.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;

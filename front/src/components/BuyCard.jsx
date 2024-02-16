
import React, { useState } from 'react';
import { useProduct } from '../contexts/ProductContext';

const BuyCard = ({ el }) => {
  const { setSelectedProduct } = useProduct();
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`card bg-white`}
        onClick={() => {
          setSelectedProduct(el);
          setSelected(!selected);
        }}
      >
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{el.title}</h2>
            <div className="badge badge-secondary" onClick={() => {
              setSelectedProduct(el);
              setSelected(!selected);
            }}>
              Buy
            </div>
          </div>
          <div className="flex flex-col">
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


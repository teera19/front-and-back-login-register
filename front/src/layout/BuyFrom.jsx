import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

export default function BuyForm() {
  const { id } = useParams();
  const { product } = useProduct();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-gray-100 p-4">
      <div className="text-3xl text-gray-800">รอชำระ</div>
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        {product ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-2">รายละเอียด: {product.detail}</p>
            <p className="text-gray-600 mb-4">ราคา: {product.price}</p>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full mb-4 rounded-lg shadow-md"
              />
            )}
            <button
              onClick={() => handleSelectProduct(product.id)}
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out ${
                selectedProducts.includes(product.id) ? "bg-blue-600" : ""
              }`}
            >
              {selectedProducts.includes(product.id) ? "ยกเลิกชำระเงิน" : "ชำระเงิน"}
            </button>
          </div>
        ) : (
          <p className="text-gray-600">ไม่มีสินค้าที่เลือก</p>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">รายการสินค้าที่เลือก</h2>
        {selectedProducts.map(productId => (
          <div key={productId} className="flex items-center justify-between mb-2">
            <p>{productId}</p>
            <button onClick={() => handleSelectProduct(productId)}>ยกเลิก</button>
          </div>
        ))}
      </div>
    </div>
  );
}

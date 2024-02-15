import axios from "axios";
import { useState, useEffect } from "react";
import BuyCard from "../components/BuyCard";

export default function AllItem() {
  const [products, setProducts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await axios.get("http://localhost:8000/products/all");
        const productsWithImageUrl = response.data.products.map(product => {
          return {
            ...product,
            imageUrl: product.imageUrl ? `http://localhost:8000/uploads/${product.imageUrl}` : null
          };
        });
        setProducts(productsWithImageUrl);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchAllProducts();
  }, [trigger]);

  const openModal = (id) => {
    // ทำอะไรสักอย่างเมื่อมีการคลิกที่สินค้า
  };

  return (
    <div>
      <h1 className="text-3xl m-5 text-white text-center">สินค้าทั้งหมด</h1>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <BuyCard el={product} openModal={openModal} setTrigger={setTrigger} />
          </div>
        ))}
      </div>
    </div>
  );
}

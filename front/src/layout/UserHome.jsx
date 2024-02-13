import axios from 'axios'
import {useEffect, useState} from 'react'
import ModalEdit from '../components/ModalEdit'
import ProductCard from '../components/ProductCard'

export default function UserHome() {
  const [products, setProducts] = useState([])
  const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect( ()=>{
    const run = async()=>{
      let token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8000/products', {
        headers : { Authorization : `Bearer ${token}`}
      })
      const productsWithImageUrl = rs.data.products.map(product => {
        return {
          ...product,
          imageUrl: product.imageUrl ? `http://localhost:8000/uploads/${product.imageUrl}` : null
        };
      });
      console.log(rs.data.products)
     setProducts(rs.data.products)
     setProducts(productsWithImageUrl);
    }
    run()
  }, [trigger] )

  const openModal = (id)=>{
    let idx = products.findIndex(el=>el.id===id)
    setEditIdx(idx)
    document.getElementById("my_modal_2").showModal()
  }

  const closeModal = () => {
    document.getElementById("my_modal_2").close()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500 mt-5">Your Products</div>
      <ModalEdit el={products[editIdx]} closeModal={closeModal} setTrigger={setTrigger}/>
      <div className="flex flex-col gap-4">
        {products.map((el) => (
          <div key={el.id}>
          <ProductCard el={el} openModal={openModal} setTrigger={setTrigger} />
        </div>
        ))}
      </div>
    </div>
  );
}

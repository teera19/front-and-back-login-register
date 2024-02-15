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
    <div className="flex flex-col gap-4 items-center">
      <div className=' text-3xl m-5 text-white'>สินค้าของฉัน</div>
      <ModalEdit el={products[editIdx]} closeModal={closeModal} setTrigger={setTrigger}/>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {products.slice(0, 6).map((el) => (
          <div key={el.id}>
            <ProductCard el={el} openModal={openModal} setTrigger={setTrigger} />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {products.slice(6).map((el) => (
          <div key={el.id}>
        ++    <ProductCard el={el} openModal={openModal} setTrigger={setTrigger} />
          </div>
        ))}
      </div>
    </div>
  );
 }


//  <div className="navbar flex text-white ">
//  <div className="ml-[1100px] flex flex-row mt-5">
//    <ul className="flex flex-row gap-4">
//      {finalNav.map((el) => (
//        <li key={el.to}></li>
//      ))}
//      {user?.id && (
//        <div>
//          <Link to="/profile">
//            <FaUser
//              size={20}
//              className="text-white inline-block text-center absolute ml-[-130px]"
//            />
//          </Link>
//          <div>
//            <FaShoppingCart
//              size={22}
//              className="text-white inline-block text-center absolute ml-[-170px] "
//            />
//          </div>
//          <div>
//            <div className="text-white inline-block text-center absolute ml-[-100px] ">
//              <Link to="/">สินค้าทั้งหมด</Link>
//            </div>
//            <li className=" ml-24">
//              <Link to="#" onClick={hdlLogout}>
//                Logout
//              </Link>
             
//            </li>
//            <li className=" mt-[-24px] ml-8">
//            <Link to="/new" onClick={hdlLogout}>
//                Create
//              </Link>
//            </li>
//          </div>
//        </div>
//      )}
//    </ul>
//  </div>
// </div>

// <Link to={el.to}>{el.text}</Link>
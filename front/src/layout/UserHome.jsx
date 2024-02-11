import axios from 'axios'
import {useEffect, useState} from 'react'

export default function UserHome() {
  const [products, setProducts] = useState([])

  useEffect( ()=>{
    const run = async()=>{
      let token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8000/products', {
        headers : { Authorization : `Bearer ${token}`}
      })
     setProducts(rs.data.products)
    }
    run()
  }, [] )

  return (
    <>
    <div className=' text-white m-8'>
    <div>
      <h2>Product List</h2>
      <hr />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.detail}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  )
}

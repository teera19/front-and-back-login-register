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
    <div>UserHome</div>
    { JSON.stringify(products)}
    </>
  )
}

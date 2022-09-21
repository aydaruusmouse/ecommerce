import React from 'react'
import { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios' 
import Product from '../components/Products'

function Screens() {
  const [Products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts= async()=>{
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {Products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                   <Product product={product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Screens
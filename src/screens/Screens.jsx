import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Products from '../products'
import Product from '../components/Products'
function Screens() {
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
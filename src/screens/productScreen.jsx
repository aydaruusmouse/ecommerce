import React from 'react'
import products from '../products'
import {useParams} from 'react-router-dom'
import {Card, Image, ListGroup, Button, Row, Col, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
function productScreen() {
 const pram= useParams()
 const product= products.find(product=> product._id== pram.id)
  return (
    <div>
        <Link to="/" className="btn btn-light my-3">Go Back </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={5}>
                <ListGroup varinat="flush">
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Rating value={product.rating} text={product.numReviews} color={"#f8e825"}></Rating>
                  </ListGroupItem>
                  <ListGroupItem>
                    Price: ${product.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    Description: {product.description}
                  </ListGroupItem>
                  <Button>Order</Button>
                </ListGroup>
            </Col>

        </Row>
    </div>
  )
}

export default productScreen
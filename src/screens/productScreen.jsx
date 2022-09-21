import React from 'react'
// import products from '../products'
import {useParams} from 'react-router-dom'
import {Card, Image, ListGroup, Button, Row, Col, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
import {useState, useEffect} from 'react'
import axios from 'axios' 
function productScreen() {
  const [product, setProduct] = useState([])
  const pram= useParams()
  useEffect(()=>{
    const fetchProduct= async()=>{
      const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${pram.id}/`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

//  const product= products.find(product=> product._id== pram.id)
  return (
    <div>
        <Link to="/" className="btn btn-light my-3">Go Back </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup varinat="flush">
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} Rewiews`} color={"#f8e825"}></Rating>
                  </ListGroupItem>
                  <ListGroupItem>
                    Price: ${product.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    Description: {product.description}
                  </ListGroupItem>
                </ListGroup>
            </Col>
          <Col md={3}>
             <Card>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col>
                        Price:
                      </Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>
                        Status:
                      </Col>
                      <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                    <Button className="btn-block center" type="button" disabled={product.countInStock == 0}>Add To Cart</Button>

                    </Row>
                  </ListGroupItem>
                </ListGroup>
             </Card>
          </Col>
        </Row>
    </div>
  )
}

export default productScreen
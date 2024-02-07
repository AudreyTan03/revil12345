import React, {useEffect, useState} from 'react'

import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../Components/Product'
import axios from 'axios';


function Homescreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      async function fetchProducts() {
        const {data} = await axios.get('/api/products')
        setProducts(data)
      }
      fetchProducts()
  })
  return (
        <div>
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}

export default Homescreen
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


function Wishlist() {
  const wishListItem = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlist = (item) => {
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <>
      <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
        <button className='btn btn-success mt-4 ms-4'><i class="fa-solid fa-arrow-left me-2"></i>BACK TO HOME</button>
      </Link>
      <Row className='m-5'>
        {
          wishListItem?.length > 0 ?
            wishListItem.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} className='p-3' />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>Price: &#x20B9; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash" ></i></Button>
                      <Button variant='outline-success' onClick={() => handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div style={{ height: "100vh", marginTop: "150px" }} className='d-flex  align-items-center flex-column'>
              <img src="https://imgs.search.brave.com/FqAhPgA8Ix3r50nhgLclI4FyYvgPDx0-wd0UikIYIn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2hvcHBpbmct/YW5kLWVjb21tZXJj/ZS0yOC85MC9lbXB0/eV9jYXJ0LTY0LnBu/Zw" height='100px' alt="" />
              <h3 className='text-danger fw-bolder mt-3'>Your Cart Is Empty</h3>
            </div>
        }

      </Row>
    </>
  )
}

export default Wishlist
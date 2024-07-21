import React  from 'react'
import { useProducts } from './Context/ProductContext'

function Products() {
    const {products } = useProducts();
  return (
    <>
      <h1>Products</h1>
      <div style={{display: 'flex',flexWrap: 'wrap', border: '2px'}}>
        {
            products.map(product => {
                return (
                    <div>
                        <img src={product.images[0]} alt="" height={'200px'} width={'200px'}/>
                        <h3>{product.title}</h3>
                        <h2>{product.brand}</h2>
                        <h3>{product.category}</h3>
                        <h4>Price : {product.price}</h4>
                        <h5>Rating : {product.rating}</h5>
                        <div>
                            <button>ADD TO CART</button>
                            <button>BUY NOW</button>

                        </div>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Products

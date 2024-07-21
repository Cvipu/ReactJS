import React from 'react'
import { createContext,useState,useEffect,useContext } from 'react'
const ProductContext = createContext()

function ProductContextAPI({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetchData()
    },[]);
    const fetchData = async () => {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        console.log(data);
        setProducts(data.products);
    }
  return (
    <ProductContext.Provider
       value={{products, setProducts}}>
          {children}
    </ProductContext.Provider>
  )
}
export const useProducts = () => useContext(ProductContext);

export default ProductContextAPI;

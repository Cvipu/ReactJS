import React from 'react'
import Products from './Products'
import ProductContextAPI from './Context/ProductContext'
import {Provider} from "react-redux"
import Child from './Child'
import store from './Context/redux/Store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Child />
      </Provider>
    </>
  )
}

export default App

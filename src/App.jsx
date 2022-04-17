import React,{ useState } from 'react'



import {store}  from "./store/store";
import { Provider } from "react-redux";
import './App.css'
import Counter from './counter';
  
function App() {
  
  console.log(store)

  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  )
}

export default App

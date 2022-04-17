import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducer/counterSlice.js'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
 
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            increment
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(decrement())}>
           decrement
          </button>
        </p>
        <h1>count:{count}</h1>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default Counter
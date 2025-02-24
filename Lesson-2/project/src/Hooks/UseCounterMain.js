import React from 'react'
import useCounter from './useCounter'

export default function UseCounterMain() {
    const {counter,increment,decrement} = useCounter(5);
    return (
        <div>
        <h2>Counter:{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

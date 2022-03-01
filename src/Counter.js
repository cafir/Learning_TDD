import React, { useState } from "react";

const Counter = () => {
    const [counter, SetCounter] = useState(0)
    return (
        <div>
            <h1>This is counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id='increment-btn'
            onClick={() => SetCounter(counter + 1)}>
                Increment
            </button>
            <button id='decrement-btn'
            onClick={() => SetCounter(counter - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;
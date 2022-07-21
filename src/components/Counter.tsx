import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import counter from '../store/counter';

const Counter = observer(() => {
  const [co, setCo] = useState();

  return (
    <div>
      {`Counter = ${counter.count}`}
      <div>
        <button type="button" onClick={() => counter.increment()}>+</button>
        <button type="button" onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  );
});

const sum = (a: number, b: number) => a + b;
sum(1, 2);

export default Counter;
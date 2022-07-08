import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import counter from '../store/counter';

const Counter = observer(() => {
  const a = 1;

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

export default Counter;
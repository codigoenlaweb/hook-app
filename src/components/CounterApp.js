import React, { Fragment, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState({
      counter1: 0,
      counter2: 10
  });

  const addOne = () => {
    setCounter({
        ...counter,
        counter1: counter.counter1 + 1
    })
  }

  return (
    <Fragment>
      <section className=" p-10">
        <h1>Counter App</h1>
        <p>Counter1: {counter.counter1}</p>
        <p>Counter2: {counter.counter2}</p>
        <hr />
        <button
          onClick={addOne}
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
        >
          +1
        </button>
      </section>
    </Fragment>
  );
};

export default CounterApp;

import React, { Fragment } from "react";
import UseCounter from "../hooks/useCounter";

const CounterAppWithcustomHook = () => {

  const {counter, increment, decrement, reset} = UseCounter(5);

  return (
    <Fragment>
      <section className=" p-10">
        <h1>Counter App with custom hook</h1>
        <p>Counter: {counter}</p>
        <hr />
        <button
          onClick={increment}
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
        >
          +1
        </button>

        <button
          onClick={reset}
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
        >
          Reset
        </button>

        <button
          onClick={decrement}
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
        >
          -1
        </button>
      </section>
    </Fragment>
  );
};

export default CounterAppWithcustomHook;

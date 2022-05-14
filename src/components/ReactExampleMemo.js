import React, { Fragment, useState } from "react";
import UseCounter from "../hooks/useCounter";
import Small from "./Small";

const ReactExampleMemo = () => {
  const { counter, increment } = UseCounter();
  const [bool, setBool] = useState(true);

  return (
    <Fragment>
      <section className="p-10">
        <h1>React Example Memo</h1>
        <hr />
        <Small value={counter} />
        <button
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
          onClick={() => {
            increment()
          }}
        >
          +1
        </button>
        <button
          className="px-8 py-1 bg-slate-700 text-white font-bold rounded-md"
          onClick={() => {setBool(!bool)}}
        >
          {bool ? "true" : "false"}
        </button>
      </section>
    </Fragment>
  );
};

export default ReactExampleMemo;

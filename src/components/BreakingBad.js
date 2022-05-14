import React, { Fragment } from "react";
import UseCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const BreakingBad = () => {
  const { data, setUrl } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );
  const { counter, increment } = UseCounter(2);
  return (
    <Fragment>
      <section className="p-10">
        <h1>BreakingBad quotes</h1>
        <h2 className=" text-gray-600 font-bold text-lg">
          Author: {!!data[0] && data[0].author}
        </h2>
        <h3 className=" text-gray-600 font-bold">
          {!!data[0] && data[0].quote}
        </h3>
        <button
          className="bg-gray-600 text-white font-bold mt-2 py-1 px-3 rounded-md"
          onClick={() => {
            increment();
            setUrl(`https://www.breakingbadapi.com/api/quotes/${counter}`);
          }}
        >
          next
        </button>
      </section>
    </Fragment>
  );
};

export default BreakingBad;

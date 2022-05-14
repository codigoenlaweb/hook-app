import React, { Fragment, useState } from "react";
import Message from "./Message";

function SimpleForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const validForm = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  return (
    <Fragment>
      <section className="p-10">
        <h1>SimpleForm</h1>
        <hr />
        <form>
          <input
            type="text"
            value={input.name}
            className="bg-slate-600 text-white font-bold px-2"
            onChange={validForm}
            name="name"
            placeholder="your name"
          />
          <br />
          <input
            type="email"
            value={input.email}
            className="bg-slate-600 text-white font-bold mt-2 px-2"
            onChange={validForm}
            name="email"
            placeholder="youremail@gmail.com"
          />
        </form>

        { (input.name === '123') && <Message />}
      </section>
    </Fragment>
  );
}

export default SimpleForm;

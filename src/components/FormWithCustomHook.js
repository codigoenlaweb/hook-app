import React, { Fragment } from "react";
import useForm from "../hooks/useform";

function FormWithCustomHook() {
  const { input, validForm, formSave } = useForm();

  return (
    <Fragment>
      <section className="p-10">
        <h1>Form With Custom Hook</h1>
        <hr />
        <form onSubmit={formSave}>
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
          <br />
          <input
            type="password"
            value={input.password}
            className="bg-slate-600 text-white font-bold mt-2 px-2"
            onChange={validForm}
            name="password"
            placeholder="****"
          />
          <br />
          <input
            type={"submit"}
            value="save"
            className="bg-gray-600 text-white font-bold mt-2 py-1 px-3 rounded-md"
          />
        </form>
      </section>
    </Fragment>
  );
}

export default FormWithCustomHook;

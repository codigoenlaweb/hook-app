import { Fragment } from "react";
import CounterApp from "./components/CounterApp";
import CounterAppWithcustomHook from "./components/CounterAppWithcustomHook";
import SimpleForm from "./components/SimpleForm";

function HookApp() {
  return (
    <Fragment>
      <CounterApp />
      <CounterAppWithcustomHook />
      <SimpleForm />
    </Fragment>
  );
}

export default HookApp;

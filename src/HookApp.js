import { Fragment } from "react";
import BreakingBad from "./components/BreakingBad";
import CounterApp from "./components/CounterApp";
import CounterAppWithcustomHook from "./components/CounterAppWithcustomHook";
import FormWithCustomHook from "./components/FormWithCustomHook";
import ReactExampleMemo from "./components/ReactExampleMemo";
import SimpleForm from "./components/SimpleForm";

function HookApp() {
  return (
    <Fragment>
      <CounterApp />
      <CounterAppWithcustomHook />
      <SimpleForm />
      <FormWithCustomHook />
      <BreakingBad />
      <ReactExampleMemo />
    </Fragment>
  );
}

export default HookApp;

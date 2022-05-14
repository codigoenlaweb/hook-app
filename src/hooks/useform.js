import { useState } from "react";

const useForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validForm = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const formSave = (e) => {
    e.preventDefault();
    console.log(input);
  }

    return {input, validForm, formSave}
};

export default useForm;

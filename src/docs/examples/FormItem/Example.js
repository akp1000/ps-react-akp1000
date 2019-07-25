import React, { useState } from "react";
import FormItem from "ps-react/FormItem";

const Example = () => {
  const [text, setText] = useState("");

  const onTextChangeHanlder = e => {
    if (e) e.preventDefault();
    setText(e.target.value);
  };

  return (
    <FormItem
      inputName="firstname"
      labelText="First Name"
      onTextChange={onTextChangeHanlder}
    />
  );
};

export default Example;

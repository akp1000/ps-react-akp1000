import React from "react";
import TextInput from "ps-react/TextInput";

const ExampleError = () => {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      required
      onChange={() => {}}
      error="First name is required"
    />
  );
};

export default ExampleError;

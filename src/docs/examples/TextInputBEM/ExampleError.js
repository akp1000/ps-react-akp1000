import React from "react";
import TextInputBEM from "ps-react/TextInputBEM";

const ExampleError = () => {
  return (
    <TextInputBEM
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

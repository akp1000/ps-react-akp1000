import React from "react";
import TextInputStyledComponents from "ps-react/TextInputStyledComponents";

const ExampleError = () => {
  return (
    <TextInputStyledComponents
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

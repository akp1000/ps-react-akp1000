import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

const ExampleError = () => {
  return (
    <TextInputCSSModules
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

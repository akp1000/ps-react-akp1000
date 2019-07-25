import React, { useState } from "react";
import PropTypes from "prop-types";

const FormItem = props => {
  return (
    <fieldset>
      <label htmlFor={props.inputName}>{props.labelText}</label>
      <input
        type="text"
        name={props.inputName}
        onChange={e => props.onTextChange(e)}
      />
    </fieldset>
  );
};

FormItem.propTypes = {
  inputName: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
};

export default FormItem;

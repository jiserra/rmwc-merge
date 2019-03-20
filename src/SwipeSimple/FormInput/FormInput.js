import React from "react";
import PropTypes from "prop-types";
import "../swipesimpleinput.css";

class FormInputM extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // actions
  }

  render() {
    return <input ref={input => (this.inputRef = input)} {...this.props} />;
  }
}

function FormInput(props) {
  return <FormInputM {...props} onChange={props.onChange} />;
}

FormInput.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export { FormInput as default };

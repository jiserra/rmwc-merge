import React from "react";
import Payment from "payment";
import PropTypes from "prop-types";
import "../swipesimpleInput.css";

class InputCVVM extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Payment.formatCardCVC(this.inputRef);
  }

  validCvv(number) {
    return Payment.fns.validateCardCVC(number);
  }

  onChange(e) {
    const value = e.target.value;
    const isValid = this.validCvv(value);

    if (isValid) {
      this.inputRef.classList.add("check");
    } else {
      this.inputRef.classList.remove("check");
    }
  }

  render() {
    return (
      <input
        placeholder=""
        onChange={this.onChange}
        ref={input => (this.inputRef = input)}
        {...this.props}
      />
    );
  }
}

function InputCVV(props) {
  return <InputCVVM {...props} />;
}

InputCVV.propTypes = {
  disabled: PropTypes.bool
};

export { InputCVV as default };

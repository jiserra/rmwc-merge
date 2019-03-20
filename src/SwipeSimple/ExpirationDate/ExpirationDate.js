import React from "react";
import Payment from "payment";
import PropTypes from "prop-types";
import "../swipesimpleInput.css";

class ExpirationDateM extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Payment.formatCardExpiry(this.inputRef);
  }

  validExp(number) {
    return Payment.fns.validateCardExpiry(number);
  }

  onChange(e) {
    const value = e.target.value;
    const isValid = this.validExp(value);

    if (isValid) {
      this.props.isValid && this.props.isValid();
      this.inputRef.classList.add("check");
    } else {
      this.props.isInvalid && this.props.isInvalid();
      this.inputRef.classList.remove("check");
    }
  }

  render() {
    return (
      <input
        placeholder="00 / 00"
        onChange={this.onChange}
        ref={input => (this.inputRef = input)}
        {...this.props}
      />
    );
  }
}

function ExpirationDate(props) {
  return <ExpirationDateM {...props} />;
}

ExpirationDate.propTypes = {
  disabled: PropTypes.bool,
  isValid: PropTypes.func,
  isInvalid: PropTypes.func
};

export { ExpirationDate as default };

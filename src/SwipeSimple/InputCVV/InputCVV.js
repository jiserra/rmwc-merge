import React from "react";
import Payment from "payment";
import PropTypes from "prop-types";
import "../swipesimpleInput.css";

class InputCVVM extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Payment.formatCardCVC(this.inputRef);
  }

  render() {
    return (
      <input
        placeholder=""
        ref={input => (this.inputRef = input)}
        {...this.props}
      />
    );
  }
}

function InputCVV(props) {
  return <InputCVVM {...props} onChange={props.onChange} />;
}

InputCVV.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export { InputCVV as default };

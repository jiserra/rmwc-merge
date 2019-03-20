import React from "react";
import Payment from "payment";
import PropTypes from "prop-types";
import "../swipesimpleInput.css";

class ExpirationDateM extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Payment.formatCardExpiry(this.inputRef);
  }

  render() {
    return (
      <input
        placeholder="00 / 00"
        ref={input => (this.inputRef = input)}
        {...this.props}
      />
    );
  }
}

function ExpirationDate(props) {
  return <ExpirationDateM {...props} onChange={props.onChange} />;
}

ExpirationDate.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export { ExpirationDate as default };

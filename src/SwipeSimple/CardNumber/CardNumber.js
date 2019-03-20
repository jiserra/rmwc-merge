import React from "react";
import Payment from "payment";
import PropTypes from "prop-types";
import "../swipesimpleinput.css";

class CardNumberM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardType: "test"
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Payment.formatCardNumber(this.inputRef, 16);
  }

  cardType(number) {
    return Payment.fns.cardType(number);
  }

  onChange(e) {
    const value = e.target.value;
    const cardType = this.cardType(value);

    this.setState({ cardType });
  }

  render() {
    return (
      <div className="cardInputContainer">
        <div className={`cardIcon ${this.state.cardType}`} />
        <input
          className="cardInput"
          onChange={this.onChange}
          placeholder="0000 0000 0000 0000"
          ref={input => (this.inputRef = input)}
          {...this.props}
        />
      </div>
    );
  }
}

function CardNumber(props) {
  return <CardNumberM {...props} />;
}

CardNumber.propTypes = {
  disabled: PropTypes.bool
};

export { CardNumber as default };

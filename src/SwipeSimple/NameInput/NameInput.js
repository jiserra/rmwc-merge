import React from "react";
import PropTypes from "prop-types";
import "../swipesimpleInput.css";

class NameInputM extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    if (value.length > 3) {
      this.inputRef.classList.add("check");
    } else {
      this.inputRef.classList.remove("check");
    }
  }

  render() {
    return (
      <input
        maxLength="26"
        onChange={this.onChange}
        ref={input => (this.inputRef = input)}
        {...this.props}
      />
    );
  }
}

function NameInput(props) {
  return <NameInputM {...props} />;
}

NameInput.propTypes = {
  disabled: PropTypes.bool
};

export { NameInput as default };

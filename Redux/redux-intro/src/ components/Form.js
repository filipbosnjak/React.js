import React, { Component } from "react";
import { connect } from "react-redux";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state.text);
            this.setState({
              text: "",
            });
          }}
        >
          <input
            type="text"
            value={this.state.text}
            placeholder="Enter text..."
            onChange={(e) => {
              this.setState({
                text: e.target.value,
              });
            }}
          />
          <button type="submit">Submit</button>
          <div>Output: {this.props.text}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.formReducer.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text) => {
      dispatch({
        type: "ADD_TEXT",
        payload: text,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

import React, { Component } from "react";
import { connect } from "react-redux";
import { clearAll } from "../actions";

export class ClearAll extends Component {
  render() {
    return (
      <div className="clearAll">
        <button onClick={() => this.props.clearAll()}>Clear All</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clearAll: () => {
      dispatch(clearAll());
    },
  };
};

export default connect(null, mapDispatchToProps)(ClearAll);

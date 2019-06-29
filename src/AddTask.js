import React, { Component } from "react";

class AddTask extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <label>Task to add</label>
          </div>

          <button
            onClick={this.handleSubmit}
            className="waves-effect waves-light blue btn"
          >
            <i className="material-icons left">add</i>add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;

import React, { Component } from "react";
import axios from "axios";

class AddTag extends Component {
  constructor() {
    super();

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      timeCreated: 0,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      timeCreated: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      title: this.state.title,
        timeCreated: this.state.timeCreated,
    }
    axios
      .post("http://localhost:5000/api/addTag", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="m-3">
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Time Created: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.timeCreated}
              onChange={this.onChangeTime}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Tag" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTag;

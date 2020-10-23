import React, { Component } from "react";
import axios from "axios";

class AddBookmark extends Component {
  constructor() {
    super();

    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangePublisher = this.onChangePublisher.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      link: "",
      title: "",
      timeCreated: 0,
      publisher: "",
    };
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value,
    });
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

  onChangePublisher(e){
    this.setState({
      publisher: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
        link: this.state.link,
        title: this.state.title,
        timeCreated: this.state.timeCreated,
        publisher: this.state.publisher,
    }

    axios
      .post("http://localhost:5000/api/addBookmark", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="m-3">
          <div className="form-group">
            <label>Link: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
            />
          </div>
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
            <label>Publisher: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.publisher}
              onChange={this.onChangePublisher}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Bookmark" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddBookmark;

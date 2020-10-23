import React, { Component } from "react";
import axios from "axios";

class AddTagtoBookmark extends Component {
  constructor() {
    super();

    this.onChangeBookmarkSelect = this.onChangeBookmarkSelect.bind(this);
    this.onChangeTagSelect = this.onChangeTagSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bookmark: [],
      tag: [],
      selectedBookmarkID: "",
      selectedTagID: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/getBookmarks")
      .then((res) => {
        this.setState({
          bookmark: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/getTags")
      .then((res) => {
        this.setState({
          tag: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeBookmarkSelect(e) {
    console.log(e.target.value);
    this.setState({
      selectedBookmarkID: e.target.value,
    });
  }

  onChangeTagSelect(e) {
    this.setState({
      selectedTagID: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      tagID: this.state.selectedTagID,
      bookmarkID: this.state.selectedBookmarkID,
    };
    axios
      .post("http://localhost:5000/api/addTagtoBookmark", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="m-3">
          <div className="form-group">
            <label htmlFor="bookmark" className="mr-0">Select Bookmark:  </label>
            <select
              className="custom-select custom-select-m w-50"
              name="bookmark"
              onChange={this.onChangeBookmarkSelect}
            >
              <option>Select</option>
              {this.state.bookmark.map((bookmark) => {
                return <option value={bookmark._id}>{bookmark.title}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tag" className="mr-5">Select Tag:</label>
            <select
              className="custom-select custom-select-m w-50"
              name="tag"
              onChange={this.onChangeTagSelect}
            >
              <option>Select</option>
              {this.state.tag.map((tag) => {
                return <option value={tag._id}>{tag.title}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Tag to Bookmark"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTagtoBookmark;

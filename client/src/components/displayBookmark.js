import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class ShowBookmark extends Component {
  constructor() {
    super();

    this.state = {
      bookmark: [],
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
  }

  deleteBookmark(id) {
    axios
      .delete("http://localhost:5000/api/deleteBookmark/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({
      bookmark: this.state.bookmark.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered mt-2">
          <thead className="bg-warning">
            <tr>
              <th>
                Link<div style={{ height: 13 }}></div>
              </th>
              <th>
                Title<div style={{ height: 13 }}></div>
              </th>
              <th>
                Time Created<div style={{ height: 25 }}>(Epoch Time)</div>
              </th>
              <th>Publisher<div style={{ height: 13 }}></div></th>
              <th>
                Tags<div style={{ height: 13 }}></div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookmark.map((bookmark) => {
              return (
                <tr className="table-success">
                  <th><a target="_blank" href={bookmark.link}>{bookmark.link}</a></th>
                  <th>{bookmark.title}</th>
                  <th>{bookmark.timeCreated}</th>
              <th>{bookmark.publisher}</th>
                  <th>
                    {bookmark.tags.map((tag) => {
                      return(<p>{tag}</p>);
                    })}
                  </th>
                  <th>
                    <a href="/showBookmark" onClick={() => this.deleteBookmark(bookmark._id)}>
                      Delete
                    </a>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowBookmark;

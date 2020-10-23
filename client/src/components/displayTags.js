import React, { Component } from "react";
import axios from "axios";

class ShowTag extends Component {
  constructor() {
    super();

    this.state = {
      tag: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/getTags")
      .then((res) => {
        this.setState({
          tag: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteTag(id) {
    axios
      .delete("http://localhost:5000/api/deleteTag/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({
      tag: this.state.tag.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered m-3">
          <thead className="bg-warning">
            <tr>
              <th>
                Title<div style={{ height: 13 }}></div>
              </th>
              <th>
                Time Created<div style={{ height: 13 }}>(Epoch Time)</div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tag.map((tag) => {
              return (
                <tr className="table-success">
                  <th>{tag.title}</th>
                  <th>{tag.timeCreated}</th>
                  <th>
                    <a href="/showTag" onClick={() => this.deleteTag(tag._id)}>
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

export default ShowTag;

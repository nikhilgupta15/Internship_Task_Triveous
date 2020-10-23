import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: "/addBookmark",
          }}
        >
          <button className="btn btn-primary m-2">Add Bookmark</button>
        </Link>
        <br></br>
        <Link
          to={{
            pathname: "/addTag",
          }}
        >
          <button className="btn btn-danger m-2"> Add Tag</button>
        </Link>
        <br></br>
        <Link
          to={{
            pathname: "/addTagtoBookmark",
          }}
        >
          <button className="btn btn-success m-2">Add Tag to Bookmark</button>
        </Link>
        <br></br>
        <Link
          to={{
            pathname: "/removeTagfromBookmark",
          }}
        >
          <button className="btn btn-dark m-2">Remove Tag from Bookmark</button>
        </Link>
        <br></br>
        <Link
          to={{
            pathname: "/showBookmark",
          }}
        >
          <button className="btn btn-warning m-2">Show Bookmark</button>
        </Link>
        <br></br>
        <Link
          to={{
            pathname: "/showTag",
          }}
        >
          <button className="btn btn-info m-2">Show Tag</button>
        </Link>
      </div>
    );
  }
}

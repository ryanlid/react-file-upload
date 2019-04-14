import React, { Component } from "react";
import FileUpload from "./compoments/FileUpload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react" /> React File Upload
        </h4>
        <FileUpload />
      </div>
    );
  }
}

export default App;

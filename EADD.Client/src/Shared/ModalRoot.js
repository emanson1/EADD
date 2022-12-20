import React from "react";
import Modal from "./Shared/Modal";
import "./app.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Modal />
      </div>
    );
  }
}
export default App;
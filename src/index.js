import React from "react";
import ReactDOM from "react-dom";
import PostForm from "./PostForm";
import AllPost from "./AllPost";
import "./styles.css";
import { createStore } from "redux";
import PostReducer from "./reducers/PostReducer";
import { Provider } from "react-redux";

const store = createStore(PostReducer);

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Post It</h2>
      </div>
      <PostForm />
      <AllPost />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

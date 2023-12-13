import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./pages/app";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import "./index.css";
// import UseReducerCounter from "./components/UseReducerCounter";
// import PostList from "./components/PostList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <UseReducerCounter /> */}
      </BrowserRouter>
      {/* <PostList /> */}
    </Provider>
  </React.StrictMode>
);

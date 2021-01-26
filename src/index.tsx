import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  NavLink,
} from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./main";
import store from "./redux/store"
import "./index.css"

const App = () => (
  <HashRouter>
    <div>
      <header>
        <nav className="menu">
          <ul className="menuList">
            <li className="menuItem"><NavLink exact to="/">Home</NavLink></li>
            <li className="menuItem"><NavLink to="/totalcount">Total Count</NavLink></li>
          </ul>
        </nav>
      </header>
      <Main/>
    </div>
  </HashRouter>
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

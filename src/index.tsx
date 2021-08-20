import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const Application: React.SFC<{}> = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(<Application />, document.getElementById("root"));

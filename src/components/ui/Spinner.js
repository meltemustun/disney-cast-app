/*       style={{ width: "200px", margin: "auto", display: "block" }}
 */

import spinner from "../../img/spinner.gif";

import React from "react";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    ></img>
  );
};

export default Spinner;

import React from "react";

import Module from "./module";

const ModuleContainer = () => (
  <section className="modules">
    <ul className="modules__container">
      <li className="module">
        <Module />
      </li>
    </ul>
  </section>
);

export default ModuleContainer;

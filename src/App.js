import { render } from "solid-js/web";

import Counter from "./Counter"

import "./index.scss";

const App = () => (
  <Counter />
);
render(App, document.getElementById("app"));


/*

<div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: solidjs_counter</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter />
  </div>

*/

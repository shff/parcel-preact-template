import { h, render } from "preact";

const node = document.querySelector("main");

render(<div>Hello, Preact!</div>, node, node.lastChild);

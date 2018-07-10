import { h, render } from "preact";
import "tachyons";

const node = document.querySelector("main");

render(<div>Hello, Preact!</div>, node, node.lastChild);

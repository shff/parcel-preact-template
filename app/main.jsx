import { h, render, Component } from "preact";

function createClass(obj) {
  function F(){ Component.call(this); }
  var p = F.prototype = new Component;
  for (var i in obj) p[i] = obj[i];
  return p.constructor = F;
}

const Hello = createClass({
  render() {
    return (<div>Hello, Preact!</div>);
  }
});

const node = document.querySelector("main");

render(<Hello />, node, node.lastChild);

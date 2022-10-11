import ComponentSignature from "./types.js";

class Component implements ComponentSignature {
  domElement: HTMLElement;
  parentElement: HTMLElement;

  constructor(parentElement: HTMLElement, className = "", tag = "div") {
    this.domElement = document.createElement(tag);
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;

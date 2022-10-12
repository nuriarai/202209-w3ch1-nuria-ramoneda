import King from "./characters/King/King.js";
import Character from "./characters/Character/Character.js";
import Button from "./components/button/button.js";

/* const Joana = new King("Joana", "Baratheon", 32, 4);
console.log(Joana); */

const rootElement = document.querySelector(".root");
const button = new Button(rootElement as HTMLElement, "btn", "Habla", () => {
  console.log("Click");
});
//console.log(button);
button.render();

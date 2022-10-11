import Component from "../component/component.js";

class Button extends Component {
  constructor(
    parentElement: HTMLElement,
    private className: string,
    private readonly text: string,
    private readonly action: () => void
  ) {
    //demano el parent element a fora
    super(parentElement, className, "button"); //li passo el parent element a la mare
  }

  render() {
    super.render();

    this.domElement.textContent = this.text;
    this.domElement.classList.add("character__action", "btn");
  }

  addListeners(): void {
    this.domElement.addEventListener("click", () => {
      console.log("Click");
    });
  }
}

export default Button;

import KingSignature from "./types.js";
import Character from "../Character/Character.js";

class King extends Character implements KingSignature {
  kingdomYears: number;

  constructor(
    name: string,
    familyName: string,
    age: number,
    kingdomYears: number
  ) {
    super(name, familyName, age);
    this.kingdomYears = kingdomYears;
  }

  comunicate() {
    return `${super.comunicate()}Vais a morir todos`;
  }
}

export default King;

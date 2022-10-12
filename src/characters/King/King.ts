import KingSignature from "./types.js";
import Character from "../Character/Character.js";

class King extends Character implements KingSignature {
  constructor(
    name: string,
    familyName: string,
    age: number,
    public kingdomYears: number
  ) {
    super(name, familyName, age);
  }

  comunicate() {
    return `${super.comunicate()}Vais a morir todos`;
  }
}

export default King;

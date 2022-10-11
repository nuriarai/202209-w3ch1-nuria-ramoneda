import CharacterSignature from "./types.js";

class Character implements CharacterSignature {
  isAlive = true;
  tvShow = "Game of Thrones";

  constructor(
    public name: string,
    public familyName: string,
    public age: number
  ) {}

  comunicate() {
    return `${this.name} dice: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;

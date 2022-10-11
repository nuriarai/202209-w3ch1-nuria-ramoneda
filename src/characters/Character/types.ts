interface CharacterSignature {
  name: string;
  familyName: string;
  age: number;
  isAlive: boolean;
  tvShow: string;
  comunicate: () => string;
  die: () => void;
}

export default CharacterSignature;

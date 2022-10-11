export interface CharacterSignature {
  name: string;
  familyName: string;
  age: number;
  isAlive: boolean;
  tvShow: string;
  domElement: HTMLElement;
  render: () => void;
}

export interface KingSignature extends CharacterSignature {
  kingdomYears: number;
}

export interface FighterSignature extends CharacterSignature {
  weapon: string;
  destreza: number;
}

export interface SquireSignature extends CharacterSignature {
  whoServes: string;
  pelotism: number;
}

export interface AdviserSignature extends CharacterSignature {
  whoAdvises: string;
}

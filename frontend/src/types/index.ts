export interface Character {
  id: number;
  name: string;
  height: string;
  mass: string;
  hairColour: string;
  skinColour: string;
  eyeColour: string;
  gender: string;
}

export interface Like {
  id: number;
  characterId: number;
}

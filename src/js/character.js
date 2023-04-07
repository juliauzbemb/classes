import checkValidity from "./validation.js";

export default class Character {
  constructor(name, type) {
    checkValidity(name, type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health <= 0) {
        throw new Error("The character is dead");
      }
    } else {
      throw new Error("The character is already dead");
    }
  }
}

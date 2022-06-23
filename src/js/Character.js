export default class Character {
  constructor(name, type, attack, protection) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.type = type;
    this.attack = attack;
    this.protection = protection;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.protection += this.protection * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.protection / 100);
    }
  }
}

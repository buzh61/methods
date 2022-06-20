import Bowman from '../src/js/Bowman';
import Swordsman from '../src/js/Swordsman';
import Magician from '../src/js/Magician';
import Undead from '../src/js/Undead';
import Zombie from '../src/js/Zombie';
import Daemon from '../src/js/Daemon';

test('Creating Bowman', () => {
  const character = new Bowman('Steve Bowie');
  const expectedData = {
    name: 'Steve Bowie',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(character).toEqual(expectedData);
});

test('Creating Swordsman', () => {
  const character = new Swordsman('Joe Sword');
  const expectedData = {
    name: 'Joe Sword',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(character).toEqual(expectedData);
});

test('Creating Magician', () => {
  const character = new Magician('Penelope Magic');
  const expectedData = {
    name: 'Penelope Magic',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(character).toEqual(expectedData);
});

test('Creating Undead', () => {
  const character = new Undead('Ken Undi');
  const expectedData = {
    name: 'Ken Undi',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(character).toEqual(expectedData);
});

test('Creating Zombie', () => {
  const character = new Zombie('The Cranberries');
  const expectedData = {
    name: 'The Cranberries',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(character).toEqual(expectedData);
});

test('Creating Daemon', () => {
  const character = new Daemon('Daemon Tools');
  const expectedData = {
    name: 'Daemon Tools',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(character).toEqual(expectedData);
});

test('Bowman levelup', () => {
  const character = new Bowman('Steve Bowie');
  character.health = 80;
  const expectedData = {
    name: 'Steve Bowie',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    protection: 30,
  };

  character.levelUp();
  expect(character).toEqual(expectedData);
});

test('Bowman get Damage', () => {
  const character = new Bowman('Steve Bowie');
  character.damage(22);
  const expectedData = {
    name: 'Steve Bowie',
    type: 'Bowman',
    health: 83.5,
    level: 1,
    attack: 25,
    protection: 25,
  };

  expect(character).toEqual(expectedData);
});

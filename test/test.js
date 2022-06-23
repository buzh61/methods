import Character from '../src/js/Character';
import Bowman from '../src/js/Bowman';
import Swordsman from '../src/js/Swordsman';
import Magician from '../src/js/Magician';
import Undead from '../src/js/Undead';
import Zombie from '../src/js/Zombie';
import Daemon from '../src/js/Daemon';

test('Creating Character', () => {
  const character = new Character('Steve Jobszz', 'Barbarian', 80, 0);
  const expectedData = {
    name: 'Steve Jobszz',
    type: 'Barbarian',
    health: 100,
    level: 1,
    attack: 80,
    protection: 0,
  };
  expect(character).toEqual(expectedData);
});

test('Levelup Character', () => {
  const character = new Character('Steve Jobszz', 'Barbarian', 80, 0);
  character.health = 80;
  const expectedData = {
    name: 'Steve Jobszz',
    type: 'Barbarian',
    health: 100,
    level: 2,
    attack: 96,
    protection: 0,
  };

  character.levelUp();
  expect(character).toEqual(expectedData);
});

test('Character get damage', () => {
  const character = new Character('Steve Jobszz', 'Barbarian', 80, 0);
  character.damage(22);
  const expectedData = {
    name: 'Steve Jobszz',
    type: 'Barbarian',
    health: 78,
    level: 1,
    attack: 80,
    protection: 0,
  };
  if (character.health > 0) {
    expect(character).toEqual(expectedData);
  }

});


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

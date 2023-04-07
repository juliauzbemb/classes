import Character from "../character.js";
import Bowman from "../bowman.js";

test("check creation common Character object", () => {
  const resultExpected = {
    name: "commonChar",
    type: "Bowman",
    health: 100,
    level: 1,
  };
  const received = new Character("commonChar", "Bowman");
  expect(received).toEqual(resultExpected);
});

test("check error via validation name - short string", () => {
  expect(() => {
    new Character("t", "Bowman");
  }).toThrowError("Введите строку длиной от 2 до 10 символов");
});

test("check error via validation name - long string", () => {
  expect(() => {
    new Character("ttttttttttttttttttttttttttt", "Bowman");
  }).toThrowError("Введите строку длиной от 2 до 10 символов");
});

test("check error via validation name - not a string", () => {
  expect(() => {
    new Character(99, "Bowman");
  }).toThrowError("Введите строку длиной от 2 до 10 символов");
});

test("check error via validation type - type given but not found", () => {
  expect(() => {
    new Character("someName", "Bow");
  }).toThrowError("Класс не найден");
});

test("check error via validation type - type not given", () => {
  expect(() => {
    new Character("someName");
  }).toThrowError("Класс не найден");
});

test("check levelUp function working", () => {
  const bowmanObj = new Bowman("Main");
  bowmanObj.levelUp();
  const resultExpected = {
    name: "Main",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(bowmanObj).toEqual(resultExpected);
});

test("check levelUp function throwing error for dead characters", () => {
  const bowmanObj = new Bowman("Main");
  bowmanObj.health = 0;
  expect(() => {
    bowmanObj.levelUp();
  }).toThrowError("Нельзя повысить левел умершего");
});

test("check damage function working", () => {
  const bowmanObj = new Bowman("Main");
  bowmanObj.damage(10);
  const resultExpected = {
    name: "Main",
    type: "Bowman",
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowmanObj).toEqual(resultExpected);
});

test("check damage function working - damage kills the character", () => {
  const bowmanObj = new Bowman("Main");
  expect(() => {
    bowmanObj.damage(150);
  }).toThrowError("The character is dead");
});

test("check damage function working - the character is already dead", () => {
  const bowmanObj = new Bowman("Main");
  bowmanObj.health = 0;
  expect(() => {
    bowmanObj.damage(10);
  }).toThrowError("The character is already dead");
});

import Swordsman from "../swordsman.js";

const expectedResult = {
  name: "testSword",
  type: "Swordsman",
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test("check creation Swordsman object", () => {
  const received = new Swordsman("testSword");
  expect(received).toEqual(expectedResult);
});

import Undead from "../undead.js";

const expectedResult = {
  name: "testUndead",
  type: "Undead",
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test("check creation Undead object", () => {
  const received = new Undead("testUndead");
  expect(received).toEqual(expectedResult);
});

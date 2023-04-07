import Bowman from "../bowman.js";

const expectedResult = {
  name: "testBowman",
  type: "Bowman",
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test("check creation Bowman object", () => {
  const received = new Bowman("testBowman");
  expect(received).toEqual(expectedResult);
});

import Zombie from "../zombie.js";

const expectedResult = {
  name: "testZomb",
  type: "Zombie",
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test("check creation Zombie object", () => {
  const received = new Zombie("testZomb");
  expect(received).toEqual(expectedResult);
});

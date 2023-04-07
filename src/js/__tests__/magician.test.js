import Magician from "../magician.js";

const expectedResult = {
  name: "testMag",
  type: "Magician",
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test("check creation Magician object", () => {
  const received = new Magician("testMag");
  expect(received).toEqual(expectedResult);
});

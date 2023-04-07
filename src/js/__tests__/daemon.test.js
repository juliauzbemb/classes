import Daemon from "../daemon.js";

const expectedResult = {
  name: "testDaemon",
  type: "Daemon",
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test("check creation Daemon object", () => {
  const received = new Daemon("testDaemon");
  expect(received).toEqual(expectedResult);
});

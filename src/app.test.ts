import { MarsRover } from "./app";

describe("MarsRover", () => {
  xit("follows complete instructions it should output", () => {
    const completeInstructions = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
    const expectedOutput = `1 3 N
5 1 E`;

    const actual = new MarsRover().run(completeInstructions);

    expect(actual).toEqual(expectedOutput);
  });

  it("should not move if given no instructions", () => {
    const instructions = "5 5\n1 2 N";

    const expected = "1 2 N";

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual(expected);
  });

  it("should output a different location for a different start", () => {
    const location = "3 4 W";
    const instructions = `5 5\n${location}`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual(location);
  });

  it("should go north", () => {
    const instructions = `5 5\n1 3 N\nM`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 4 N");
  });

  it("should go north from new location", () => {
    const instructions = `5 5\n2 3 N\nM`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("2 4 N");
  });

  it("should go north twice", () => {
    const instructions = `5 5\n1 2 N\nMM`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 4 N");
  });

  it("should go north three times", () => {
    const instructions = `5 5\n1 2 N\nMMM`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 5 N");
  });

  it("should rotate right from north to east", () => {
    const instructions = `5 5\n1 2 N\nR`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 2 E");
  });

  it("should rotate right from east to south", () => {
    const instructions = `5 5\n1 2 E\nR`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 2 S");
  });

  it("should rotate right from south to west", () => {
    const instructions = `5 5\n1 2 S\nR`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 2 W");
  });

  it("should rotate right from west to north", () => {
    const instructions = `5 5\n1 2 W\nR`;

    const actual = new MarsRover().run(instructions);

    expect(actual).toEqual("1 2 N");
  });
});

enum Heading {
  East = "E",
  South = "S",
  West = "W",
  North = "N",
}

export class MarsRover {
  rotateRight(heading: string): Heading {
    const mapping = {
      E: Heading.South,
      S: Heading.West,
      W: Heading.North,
      N: Heading.East,
    };

    return mapping[heading];
  }

  run(input: string): string {
    const commands = input.split("\n");
    const current = commands[1];

    if (!commands[2]) return current;

    const split = current.split(" ");
    const x: number = parseInt(split[0]);
    let y: number = parseInt(split[1]);
    let heading: string = split[2];

    for (const instruction of commands[2]) {
      if (instruction === "R") {
        heading = this.rotateRight(heading);
        continue;
      }
      y += 1;
    }

    return `${x} ${y} ${heading}`;
  }
}

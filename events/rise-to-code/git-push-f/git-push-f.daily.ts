const text = await Bun.file("input.txt").text();

const lines = text.split("\n");

const devsWithHighestCommitsPerOffice = lines.reduce(
	(acc: { [key: string]: number }, line: string) => {
		const [dev, nrOfCommits] = line.split(";");
		if (!Object.keys(acc).includes(dev)) {
			acc[`${dev}`] = 0;
		}
		if (acc[`${dev}`] < +nrOfCommits) {
			acc[`${dev}`] = +nrOfCommits;
		}

		return acc;
	},
	{}
);
const totalCommitsOfTopDevs = Object.values(
	devsWithHighestCommitsPerOffice
).reduce((acc, cur) => acc + cur, 0);

console.log(totalCommitsOfTopDevs);

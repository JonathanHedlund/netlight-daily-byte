const text = await Bun.file("input.txt").text();

const lines = text.split("\n");

let point = 0;
let checked: number[] = [];
let group = new Set<number>();
let groups: number[] = [];
while (point < lines.length) {
	if (checked.includes(point)) {
		point++;
		continue;
	}
	checked.push(point);
	point = +lines[point];
	group.add(point);
	if (group.has(+lines[point])) {
		console.log(group);
		groups.push(group.size);
		point = 0;
		group = new Set();
	}
}

const sum = groups.reduce((acc, cur) => acc * cur, 1);

console.log(sum);

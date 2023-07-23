// compareFn(a, b) return value	sort order
// > 0  	sort a after b, e.g. [b, a]
// < 0	    sort a before b, e.g. [a, b]
// === 0	keep original order of a and b
function sortPeople(data) {
	if (!Array.isArray(data)) return "not an array!";
	const grades = { A: 1, B: 2, C: 3, D: 4 };

	data.sort((a, b) => {
		const [_a, pointsA, gradeA] = a.split("|");
		const [_b, pointsB, gradeB] = b.split("|");

		// sort by grade, asc
		if (grades[gradeA] !== grades[gradeB]) {
			return grades[gradeA] - grades[gradeB];
		}

		// if grades are the same, sort by points, desc
		return pointsB - pointsA;
	});

	// extract the names
	const sortedNames = data.map((item) => item.split("|")[0]);

	return sortedNames;
}

const data = [
	"evan|50000|D",
	"jefry|70000|C",
	"rizky|30000|D",
	"hanson|10000|B",
	"candra|30000|A",
	"goklas|20000|A",
	"hendra|20000|B",
	"surya|30000|A",
];

console.log(`
--- SORT PEOPLE ---
`);
console.log("data:", data);
console.log("sortPeople(data):", sortPeople(data));
console.log("--------");

// [1(a),2(b)]

// sort b-a
// 2-1 = 1
// [b,a]
// 2,1

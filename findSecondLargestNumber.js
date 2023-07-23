// compareFn(a, b) return value	sort order
// > 0  	sort a after b, e.g. [b, a]
// < 0	    sort a before b, e.g. [a, b]
// === 0	keep original order of a and b
function findSecondLargestNumber(data) {
	if (!Array.isArray(data)) return "not an array!";

	if (data.length <= 1) return "array should have at least two elements";

	data.sort((a, b) => {
		return b - a;
	});

	// 2nd largest number
	return data[1];
}

const data = [12, 5, 7, 17, 8, 0, -1, 16, 7];
console.log(`
--- FIND 2ND LARGEST NUMBER ---
`);
console.log("data:", data);
console.log("findSecondLargestNumber(data):", findSecondLargestNumber(data));

console.log("--------");

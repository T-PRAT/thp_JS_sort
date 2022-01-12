
const fs = require('fs');
const fileName = process.argv[2];

function getArray() {
	try {
	    const data = fs.readFileSync(fileName, 'utf8');
	    return data.slice(0, -1).split(" ");
	} catch (error) {
	    console.error(error.message);
	}
}

function bubbleSort(arr) {
	let c = 0;
	let tmp;
	for(let j = 0; j < arr.length; j++) {
		for(let i = 0; i < arr.length; i++) {
			c++;
			if (arr[i] > arr[i + 1]) {
				tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
			}
		}
	}
	console.log("Tri à bulle: " + c + " comparaisons - [" + arr + "]");
}

bubbleSort(getArray());

function Slide_down(l, r) {
	let temp = lines[r];
	for (let i = r - 1; i >= l; i--) {
		lines[i + 1] = lines[i];
	}
	lines[l] = temp;
}

async function merge(l, m, r, d) {
	let i = l;
	let j = m + 1;

	while (i < j && j <= r) {
		let a = lines[j];
		let b = lines[i];
		if (a > b) i++;
		else {
			Slide_down(i, j);
			i++; 
            j++;
		}
		await wait(d / 2.0);
		setLinesToContainer(lines);
		await wait(d / 2.0);
	}
}


async function mergeSort(l, r, d) {
	if (l < r) {
		let m = parseInt(l + (r - l) / 2);
		await mergeSort(l, m, d);
		await mergeSort(m + 1, r, d);
		await merge(l, m, r, d);
	}
}
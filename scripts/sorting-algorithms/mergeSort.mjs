function Slide_down(left, right) {
	let temp = lines[right];

	for (let i = right; i > left; i--) {
		lines[i] = lines[i - 1];
	}

	lines[left] = temp;
}

async function merge(left, mid, right, delay) {
	let i = left;
	let j = mid + 1;

	while (i < j && j <= right) {
		if(stop) {
			return;
		}
		let a = lines[j];
		let b = lines[i];
        document.getElementById(`l${lines[j]}`).style.borderColor = "red";
        document.getElementById(`l${lines[i]}`).style.borderColor = "red";
		if (a > b) i++;
		else {
			Slide_down(i, j);
			i++; 
            j++;
		}
		await wait(delay);
		setLinesToContainer(lines);
	}
}


async function mergeSort(left, right, delay) {
	if (left < right) {
		let mid = parseInt(left + (right - left) / 2);

		await mergeSort(left, mid, delay);
		await mergeSort(mid + 1, right, delay);
		await merge(left, mid, right, delay);
	}
}
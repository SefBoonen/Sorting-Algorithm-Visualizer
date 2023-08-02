class Bubblesort {
    constructor(array) {
        this.sort = array;
        this.counter = 0;
    }

    isSorted() {
        for(let i = 0; i < this.sort.length - 1; i++) {
            if (this.sort[i] > this.sort[i + 1]) {
                return false;
            }
        }
        return true;
    }

    sortOneCycle() {
        let count = this.counter;
        this.counter++;
        if (count >= this.sort.length - 2) {
            this.counter = 0;
        }     

        if (this.sort[count] > this.sort[count + 1]) {
            let tempvar = this.sort[count];
            this.sort[count] = this.sort[count + 1];
            this.sort[count + 1] = tempvar;
            return [[this.sort[count], this.sort[count + 1]], true];
        }
        return [[this.sort[count], this.sort[count + 1]], false];
    }

    getArray() {
        return this.sort;
    }

    setArray(array) {
        this.sort = array;
    }
}
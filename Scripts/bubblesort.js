class BubbleSort {
    constructor(array) {
        this.sort = array;
        this.counter = 0;
        this.swapped = false;
    }

    sortOneCycle() {
        let count = this.counter;
        this.counter++;
        if (count >= this.sort.length - 1) {
            this.counter = 0;
            if(!this.swapped) {
                return 0;
            }
            this.swapped = false;
        }     

        if (this.sort[count] > this.sort[count + 1]) {
            let tempvar = this.sort[count];
            this.sort[count] = this.sort[count + 1];
            this.sort[count + 1] = tempvar;
            this.swapped = true;
            
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
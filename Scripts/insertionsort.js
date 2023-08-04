class InsertionSort {
    constructor(array) {
        this.sort = array;
        this.length = array.length;
        this.counter = 1;
        this.countm = 0;
        this.key = 100;
    }

    sortOneCycle() {
        console.log(this.counter);
        if(this.counter >= this.length) {
            return 0;
        }

        this.key = this.sort[this.counter];
        this.counterm = this.counter - 1;

        while(this.counterm >= 0 && this.sort[this.counterm] > this.key) {
            this.sort[this.counterm + 1] = this.sort[this.counterm];
            this.counterm = this.counterm - 1;
        }

        this.sort[this.counterm + 1] = this.key; 
        this.counter++;
    }

    getArray() {
        return this.sort;
    }

    setArray(array) {
        this.sort = array;
    }
}
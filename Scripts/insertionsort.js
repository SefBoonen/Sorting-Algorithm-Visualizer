class InsertionSort {
    constructor(array) {
        this.sort = array;
        this.length = array.length;
        this.counter = 1;
        this.counterm = 0;
        this.key = this.sort[this.counter];
        this.done = false;
    }

    sortOneCycle() {
        console.log(`counter ${this.counter} key ${this.key} counterm ${this.counterm}`)

        if(this.counter >= this.length) {
            console.log("done")
            return 0;
        }

        if(this.done) {
            this.key = this.sort[this.counter];
            this.counterm = this.counter - 1;
        }


        if(this.counterm >= 0 && this.sort[this.counterm] > this.key) {
            this.done = false;
            if(this.sort[this.counterm] <= this.key) {
                this.done = true;
            }
            console.log("works")
            this.sort[this.counterm + 1] = this.sort[this.counterm];
            this.counterm--;
        } 

        if(this.done) {
            this.sort[this.counterm + 1] = this.key; 
            this.counter++;
        }
    }

    getArray() {
        return this.sort;
    }

    setArray(array) {
        this.sort = array;
    }
}
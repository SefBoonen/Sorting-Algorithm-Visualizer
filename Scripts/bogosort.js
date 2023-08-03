class BogoSort {
    constructor(array) {
        this.sort = array;
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
        this.#randomiseArray(this.sort);
    }

    getArray() {
        return this.sort;
    }

    setArray(array) {
        this.sort = array;
    }

    #randomiseArray(array) {
        let currentIndex = array.length, randomIndex;
        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
        }
        return array;
    }
}
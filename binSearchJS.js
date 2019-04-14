/**
 * Binary search implementation in JavaScript. 
 * @param list An array of sorted objects to search through.
 * @param item The item being searched for in the list.
 * @return Returns index of item if it is in the list or undefined.
 */
const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return;
}

module.exports = { binarySearch };
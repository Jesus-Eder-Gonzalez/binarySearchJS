const binSearch = require('../binSearchJS').binarySearch;

const list = [1,2,3,4,5,6,7,8,9,10];
test('Checks to see that lower tree works', () => {
    const item = 3;
    expect(binSearch(list, item)).toBe(2);
});

test('Checks to test center', () => {
    const item = 5;
    expect(binSearch(list, item)).toBe(4);
});

test('Checks to see that upper tree works', () => {
    const item = 7;
    expect(binSearch(list, item)).toBe(6);
});

test('tests the undefined case', () => {
    const item = 0;
    expect(binSearch(list, item)).toBe(undefined);
});
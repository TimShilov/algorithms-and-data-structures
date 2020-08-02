const binarySearch = require("../src/binarySearch");

describe("Binary Search", () => {
    test("Should find value index in array with an even number of elements", () => {
        const array = [...Array(10000).keys()];
        const found = binarySearch(array, 3);

        expect(found).toBe(3);
    });
    test("Should find value index in array with an odd number of elements", () => {
        const array = [...Array(10001).keys()];
        const found = binarySearch(array, 3);

        expect(found).toBe(3);
    });
    test("Should return null if value is not in array", () => {
        const array = [1, 2, 3];
        const found = binarySearch(array, -1);

        expect(found).toBeNull();
    });
    test("Should return null if no arguments passed", () => {
        const found = binarySearch();
        expect(found).toBeNull();
    });
});

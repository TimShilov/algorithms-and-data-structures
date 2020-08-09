const linearSearch = require("../../src/search/linearSearch");

describe("Linear Search", () => {
    it("should find index in sorted array of numbers or return -1", () => {
        expect(linearSearch([], 1)).toBe(-1);
        expect(linearSearch([1], 1)).toBe(0);
        expect(linearSearch([1, 2], 1)).toBe(0);
        expect(linearSearch([1, 2, 3], 2)).toBe(1);
        expect(linearSearch([1, 5, 10, 12], 1)).toBe(0);
        expect(linearSearch([1, 5, 10, 12, 14, 17, 22], 17)).toBe(5);
        expect(linearSearch([1, 5, 10, 12, 14, 17, 100], 1)).toBe(0);
        expect(linearSearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
        expect(linearSearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
    });

    it("should find index in sorted array of objects or return -1", () => {
        const sortedArrayOfObjects = [
            { key: 1, value: "value1" },
            { key: 2, value: "value2" },
            { key: 3, value: "value3" },
        ];

        const extractor = (row) => row.key;

        expect(linearSearch([], 1, extractor)).toBe(-1);
        expect(linearSearch(sortedArrayOfObjects, 4, extractor)).toBe(-1);
        expect(linearSearch(sortedArrayOfObjects, 1, extractor)).toBe(0);
        expect(linearSearch(sortedArrayOfObjects, 2, extractor)).toBe(1);
        expect(linearSearch(sortedArrayOfObjects, 3, extractor)).toBe(2);
    });

    it("should find item in sorted array of arrays or return -1", () => {
        const sortedArrayOfArrays = [
            [1, "value1"],
            [2, "value2"],
            [3, "value3"],
        ];

        const extractor = (row) => row[0];

        expect(linearSearch([], 1, extractor)).toBe(-1);
        expect(linearSearch(sortedArrayOfArrays, 4, extractor)).toBe(-1);
        expect(linearSearch(sortedArrayOfArrays, 1, extractor)).toBe(0);
        expect(linearSearch(sortedArrayOfArrays, 2, extractor)).toBe(1);
        expect(linearSearch(sortedArrayOfArrays, 3, extractor)).toBe(2);
    });
});

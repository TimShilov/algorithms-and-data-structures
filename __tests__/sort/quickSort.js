const quickSort = require("../../src/sort/quickSort");

describe("Quick Sort", () => {
    it("should sort array of numbers", () => {
        expect(quickSort([])).toStrictEqual([]);
        expect(quickSort([1])).toStrictEqual([1]);
        expect(quickSort([0, 1, 2])).toStrictEqual([0, 1, 2]);
        expect(quickSort([3, 2, 2, 1])).toStrictEqual([1, 2, 2, 3]);
        expect(quickSort([5, 4, 9])).toStrictEqual([4, 5, 9]);
    });

    it("should sort array of strings", () => {
        expect(quickSort([])).toStrictEqual([]);
        expect(quickSort(["a"])).toStrictEqual(["a"]);
        expect(quickSort(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
        expect(quickSort(["c", "c", "a"])).toStrictEqual(["a", "c", "c"]);
        expect(quickSort(["z", "x", "y"])).toStrictEqual(["x", "y", "z"]);
    });

    it("should sort array of arrays", () => {
        const arrayOrArrays = [
            [3, "value3"],
            [1, "value1"],
            [2, "value2"],
        ];
        const extractionCallback = (row) => row[0];

        expect(quickSort([], extractionCallback)).toStrictEqual([]);
        expect(quickSort(arrayOrArrays, extractionCallback)).toStrictEqual([
            [1, "value1"],
            [2, "value2"],
            [3, "value3"],
        ]);
    });

    it("should sort array of objects", () => {
        const arrayOrArrays = [
            { key: 3, value: "value3" },
            { key: 1, value: "value1" },
            { key: 2, value: "value2" },
        ];
        const extractionCallback = (item) => item.key;

        expect(quickSort([], extractionCallback)).toStrictEqual([]);
        expect(quickSort(arrayOrArrays, extractionCallback)).toStrictEqual([
            { key: 1, value: "value1" },
            { key: 2, value: "value2" },
            { key: 3, value: "value3" },
        ]);
    });
});

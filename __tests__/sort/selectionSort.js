const selectionSort = require("../../src/sort/selectionSort");

describe("Selection Sort", () => {
    it("should sort array of numbers", () => {
        expect(selectionSort([])).toStrictEqual([]);
        expect(selectionSort([1])).toStrictEqual([1]);
        expect(selectionSort([0, 1, 2])).toStrictEqual([0, 1, 2]);
        expect(selectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
        expect(selectionSort([5, 4, 9])).toStrictEqual([4, 5, 9]);
    });

    it("should sort array of strings", () => {
        expect(selectionSort([])).toStrictEqual([]);
        expect(selectionSort(["a"])).toStrictEqual(["a"]);
        expect(selectionSort(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
        expect(selectionSort(["c", "b", "a"])).toStrictEqual(["a", "b", "c"]);
        expect(selectionSort(["z", "x", "y"])).toStrictEqual(["x", "y", "z"]);
    });

    it("should sort array of arrays", () => {
        const arrayOrArrays = [
            [3, "value3"],
            [1, "value1"],
            [2, "value2"],
        ];
        const extractionCallback = (row) => row[0];

        expect(selectionSort([], extractionCallback)).toStrictEqual([]);
        expect(selectionSort(arrayOrArrays, extractionCallback)).toStrictEqual([
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
        const extractionCallback = (row) => row.key;

        expect(selectionSort([], extractionCallback)).toStrictEqual([]);
        expect(selectionSort(arrayOrArrays, extractionCallback)).toStrictEqual([
            { key: 1, value: "value1" },
            { key: 2, value: "value2" },
            { key: 3, value: "value3" },
        ]);
    });
});

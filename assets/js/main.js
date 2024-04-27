let arrayOperations = (arr) => {
    // Tìm số lớn thứ hai trong mảng
    const secondLargest = arr.sort((a, b) => b - a)[1];

    // Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
    const ascendingOrder = arr.slice().sort((a, b) => a - b);
    const descendingOrder = arr.slice().sort((a, b) => b - a);

    // Tính tổng của các số chẵn trong mảng
    const sumOfEvenNumbers = arr.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

    return {
        secondLargest,
        ascendingOrder,
        descendingOrder,
        sumOfEvenNumbers
    };
}

const numbers = [5, 3, 9, 8, 1, 2, 7, 4, 6];
const result = arrayOperations(numbers);
console.log("Số lớn thứ hai trong mảng:", result.secondLargest);
console.log("Mảng sau khi sắp xếp tăng dần:", result.ascendingOrder);
console.log("Mảng sau khi sắp xếp giảm dần:", result.descendingOrder);
console.log("Tổng của các số chẵn trong mảng:", result.sumOfEvenNumbers);

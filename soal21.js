// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

function sortArray(arr, format) {
  // lakukan validasi format yang diinginkan
  if (format === "ascending") {
    return arr.slice().sort((a, b) => a - b); // Mengurutkan secara ascending
  }
}

// contoh penggunaan:
// const numbers = [5, 2, 9, 1, 5, 6];
// const names = ["John", "Alice", "Bob", "Eve"];
// const ascendingNumbers = sortArray(numbers, "ascending");
// console.log("Ascending Numbers:", ascendingNumbers);

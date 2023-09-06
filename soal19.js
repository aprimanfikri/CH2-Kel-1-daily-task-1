// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
  let result = 0;
  // looping
  while (n > 0) {
    // ambil digit terakhir dengan modulus 10
    const digit = n % 10;

    // tambahkan digit ke jumlah total
    result += digit;

    // hapus digit terakhir dengan pembagian 10
    n = Math.floor(n / 10);
  }
  return result;
}

console.log(solution(2022)); // expected output 6
console.log(solution(1001)); // expected output 2

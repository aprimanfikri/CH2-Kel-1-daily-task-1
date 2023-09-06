// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
  // tulis jawabanmu disini
  let result;
  // looping untuk mengecek string
  for (let i = 0; i < str.length; i++) {
    // check tanda .
    if (str[i] === ".") {
      // jika ada maka ganti dengan tanda ()
      result = str.replace(/\./g, "()");
      // tanda "\." untuk mencocokkan karakter titik "."
    }
  }
  return result;
}

console.log(solution("1.1.1.1")); // expected output 1()1()1()1()
console.log(solution("192.168.1.1")); // expected output 192()268()1()1()

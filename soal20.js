// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.
function solution(str) {
  // tulis jawabanmu disini

  // inisialisasi variabel i, aIndex, dan bIndex.
  let i = 0;
  let aIndex;
  let bIndex;

  // lakukan looping untuk mengecek setiap huruf dalam string str.
  while (i < str.length) {
    // jika huruf saat ini adalah 'a', simpan indeksnya ke dalam variabel aIndex.
    if (str[i] === "a") {
      aIndex = i;
    }
    // jika huruf saat ini adalah 'b', simpan indeksnya ke dalam variabel bIndex.
    if (str[i] === "b") {
      bIndex = i;
    }

    // cek apakah ada indeks a dan indeks b yang sudah tersimpan.
    if (aIndex !== -1 && bIndex !== -1) {
      // jika selisih antara indeks b dan indeks a lebih dari atau sama dengan 4,
      // atau selisih antara indeks a dan indeks b lebih dari atau sama dengan 3,
      // maka kembalikan 'YES'.
      if (bIndex - aIndex >= 4 || aIndex - bIndex >= 3) {
        return "YES";
      }
    }

    // increment variabel i untuk memproses huruf berikutnya dalam string.
    i++;
  }

  // jika tidak ada kondisi yang memenuhi di atas, kembalikan 'NO'.
  return "NO";
}

console.log(solution("acdebae")); // expected output YES
console.log(solution("cdaecba")); // expected output NO

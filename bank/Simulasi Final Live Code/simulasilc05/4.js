/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  let str = '';
  let wordArr = [];
  let temp = '';
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== ' ') {
      str += words[i];
      temp += words[i];
    }
    
    if (words[i] == ' ' || i == words.length - 1) {
      wordArr.push(temp);
      temp = '';
    }
  }

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length === Math.round(str.length/wordArr.length)) {
      result.push(wordArr[i]);
    }
  }

  return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []

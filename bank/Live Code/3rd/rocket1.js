/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {
  let higher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let idx = [];
  let indexKata = [];
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < higher.length; j++) {
      if (sentence[i] === higher[j] || sentence[i] === lower[j]) {
        idx.push(j);
      }
    }

    if (sentence[i] === ' ' || i + 1 == sentence.length) {
      indexKata.push(idx);
      idx = [];
    }
  }

  for (let i = 0; i < indexKata.length; i++) {
    let sama = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j].length === indexKata[i].length) {
        for (let k = 0; k < indexKata[i].length; k++) {
          if (result[j][k] == indexKata[i][k]) {
            sama += 1;
          }
        }
      }
    }

    if (sama !== indexKata[i].length) {
      result.push(indexKata[i]);
    }
  }

  let resultArr = [];
  for (let i = 0; i < result.length; i++) {
    let temp = '';
    for (let j = 0; j < result[i].length; j++) {
      temp += lower[result[i][j]];
    }
    resultArr.push(temp);
  }
  
  return sentence.length !== 0 ? resultArr : 'NO WORDS';
}


console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'


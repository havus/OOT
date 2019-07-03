/**
 * Diberikan input berupa number dari 1-999999, buatlah array 2 dimensi 
 * yang sesuai dengan digit dari angka inputan mulai dari digit yang
 * paling belakang.
 * 
 * contoh input -> 250341
 * output
 * [
 *  ["A"],  //karena digit ke-6 adalah 1 ->Huruf ke-1 dalam alfabet adalah A
 *  ["D","D","D","D"], //karena digit ke 5 adalah 4 ->Huruf ke-4 dalam alfabet adalah D
 *  ["C","C","C"], //karena digit ke 4 adalah 3 -> Huruf ke 3 dalam alfabet adalah C
 *  [], kerena digit ke 3 adalah 0 -> huruf ke-0 dalam alfabet tidak ada jadi isinya kosong
 *  ["E","E","E","E","E"], //karena digit ke 2 adalah 5 -> Huruf ke 5 dalam alfabet adalah E
 *  ["B","B"], //karena dig1239it ke 1 adalah 2 -> Huruf ke 2 dalam alfabet adalah B
 * ]
 * 
 * Rule : 
 * 1. Tidak boleh mengubah input number kedalam string
 * 2. hanya boleh menggunakan looping, kondisional, dan .push()
 */

function soal2(number){
  if (number > 999999) {
    return 'Invalid Input';
  }

  let result = [];
  let abjad = 'ABCDEF';

  while (number > 0) {
    let temp = [];
    let sisa = number % 10;
    number = parseInt(number/10);
    for (let i = 0; i < sisa; i++) {
      temp.push(abjad[sisa-1]);
    }

    result.push(temp);
  }

  return result;

}

console.log(soal2(250341))
/*
[ 
 [ 'A' ],
 [ 'D', 'D', 'D', 'D' ],
 [ 'C', 'C', 'C' ],
 [],
 [ 'E', 'E', 'E', 'E', 'E' ],
 [ 'B', 'B' ]
]
 */
console.log(soal2(543210))
 /*
[ 
 [],
 [ 'A' ],
 [ 'B', 'B' ],
 [ 'C', 'C', 'C' ],
 [ 'D', 'D', 'D', 'D' ],
 [ 'E', 'E', 'E', 'E', 'E' ] 
]
 */
console.log(soal2(12398147))
// "Invalid Input"
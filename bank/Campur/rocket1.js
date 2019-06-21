/*
===========
MineSweeper
===========

[INSTRUCTIONS]
Seorang tentara sedang berada di ladang ranjau kita harus membantu tentara untuk menemukan jumlah ranjau yang ada disekeliling dekat tentara.
terdapat posisi tentara didalam map adalah huruf O dan posisi bom adalah X
tugas kita harus mencari tahu bom yang ada di delapan penjuru mata angin dari posisi tentara. ingat yang dihitung hanya bom yang ada di delapan penjuru mata angin dekat tentara


[EXAMPLE]
INPUT: [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 4
INPUT: [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 2
*/

function MineSweeper(array) {
  // your code here

  
}
Collapse 
  // your code here

}
var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4
var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2
var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board2)) // 3

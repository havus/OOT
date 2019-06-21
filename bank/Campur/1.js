/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!

STORE redNumber equal to 0
STORE yellowNumber equal to 0
STORE blueNumber equal to 0

FOR LOOPING variable i is equal to 0, i is smaller than input length, i adds by 1 every loop,
  IF input[i] is equal to 'red' 
    THEN ADD redNumber by 1
      ELSE IF input[i] is equal to 'yellow'
        THEN ADD yellowNumber by 1
          ELSE IF input[i] is equal to 'blue'
            THEN ADD blueNumber by 1

  IF redNumber is bigger than blueNumber OR yellowNumber
    DISPLAY "red the most favorite!"
      ELSE IF blueNumber is bigger than redNumber or yellowNumber
        DISPLAY "blue the most favorite!"
          ELSE IF yellowNumber is bigger than redNumber or blueNumber
            DISPLAY "yellow the most favorite!"
              ELSE 
                DSIPLAY "there are no favorite!"

*/

function favoriteColor (input) {
  var count = 0;
  var redNumber = 0;
  var yellowNumber = 0;
  var blueNumber = 0;
  for (var i=0; i < input.length; i++) {
      if(input[i] === 'red') {
        redNumber++
      } else if (input[i] === 'yellow') {
        yellowNumber++;
      } else if (input[i] === 'blue') {
        blueNumber++;
      }
    }

    if (redNumber > (blueNumber || yellowNumber)) {
      return "red the most favorite!"
    } else if (blueNumber > (redNumber || yellowNumber)) {
      return "blue the most favorite!"
    } else if (yellowNumber > (redNumber || blueNumber)) {
      return "yellow the most favorite!"
    } else {
      return "There are no favorite!"
    }
    

    

  // your code here!

}

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"
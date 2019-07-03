function charachterCounter(inputString, haramString){
  let result = {};

  for (let i = 0; i < inputString.length; i++) {
    let haram = false;
    for (let j = 0; j < haramString.length; j++) {
      if (inputString[i] === haramString[j]) {
        haram = true;
        break;
      }
    }

    if (!haram) {
      if (!result[inputString[i]]) {
        result[inputString[i]] = 1;
      } else {
        result[inputString[i]] += 1;
      }
    }
  }

  return result;
}

console.log(charachterCounter("kjfhakhyfgauwycbjhcbakjhfvwuyfvhjcbufygyhsbcsauyfgsyfg", 'kg'))
/*{ j: 4, f: 7, h: 6, a: 4, y: 7, u: 4, w: 2, c: 4, b: 4, v: 2, s: 3 }*/

console.log(charachterCounter("naganaganaganaga", 'g'))
/*{ n: 4, a: 8 }*/

console.log(charachterCounter("aofijawfufhoaiufajcskhjvbdskjhfbksjhbsd", 'gxa'))
/*{ o: 2,
  f: 5,
  i: 2,
  j: 5,
  w: 1,
  u: 2,
  h: 4,
  c: 1,
  s: 4,
  k: 3,
  v: 1,
  b: 3,
  d: 2 }
*/
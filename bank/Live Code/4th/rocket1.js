/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage (input) {
  let result = {};
  let str = '';
  let daftar = [];
  let valueOfOne = 100/input.length;

  for (let i = 0; i < input.length; i++) {
    let same = false;
    // let idx = '';
    for (let key in result) {
      if (input[i] === key) {
        same = true;
        idx = key;
        result[input[i]] += 1;
        break;
      }
    }

    if (!same) {
      result[input[i]] = 1;
      daftar.push(input[i]);
    }
  }

  daftar = daftar[daftar.length - 1];

  for (let key in result) {
    if (key === daftar) {
      str += ' ' + result[key] * valueOfOne + '% ' + key;
    } else {
      str += ' ' + result[key] * valueOfOne + '% ' + key + ',';
    }
  }

  return str;
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @

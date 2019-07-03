/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  let arrData = data.split(',');
  let temp = '';
  let speed = [];

  for (let i = 0; i < arrData.length; i++) {
    for (let j = 0; j < arrData[i].length; j++) {
      if (arrData[i][j] == ':') {
        for (let k = j + 1; k < arrData[i].length; k++) {
          if (arrData[i][k] == ' ') {
            speed.push(parseInt(temp));
            temp = '';
            break;
          } else {
            temp += arrData[i][k];
          }
        }
      }
    }
  }

  for (let i = 0; i < speed.length; i++) {
    for (let j = i + 1; j < speed.length; j++) {
      if (speed[i] > speed[j]) {
        let temp = speed[i];
        speed[i] = speed[j];
        speed[j] = temp;
      }
    }
  }

  return data.length === 0 ? 'No data' : speed[speed.length-1];
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data

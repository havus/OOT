/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){
  let sisa = bayar - harga;
  let kembalian = {};
  kembalian['1000'] = 0;
  kembalian['2000'] = 0;
  kembalian['5000'] = 0;
  kembalian['10000'] = 0;
  kembalian['20000'] = 0;
  kembalian['50000'] = 0;
  kembalian['100000'] = 0;
  let result = {};

  if (sisa < 0) {
    return 'Uang tidak cukup mak, minta lagi sama suami';
  } else if (sisa == 0) {
    return {};
  } else {
    for (let i = 0; i < sisa; i++) {
      if (sisa >= 100000) {
        kembalian['100000'] += 1;
        sisa -= 100000;
        continue;
      }
      
      if (sisa >= 50000) {
        kembalian['50000'] += 1;
        sisa -= 50000;
        continue;
      }

      if (sisa >= 20000) {
        kembalian['20000'] += 1;
        sisa -= 20000;
        continue;
      }

      if (sisa >= 10000) {
        kembalian['10000'] += 1;
        sisa -= 10000;
        continue;
      }

      if (sisa >= 5000) {
        kembalian['5000'] += 1;
        sisa -= 5000;
        continue;
      }

      if (sisa >= 2000) {
        kembalian['2000'] += 1;
        sisa -= 2000;
        continue;
      }

      if (sisa >= 1000) {
        kembalian['1000'] += 1;
        sisa -= 1000;
        continue;
      }
    }
  }

  for (let key in kembalian) {
    if (kembalian[key] > 0) {
      result[key] = kembalian[key];
    }
  }

  return result;
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
// console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
// console.log(hitungKembalian(50000,500000)); // Uang tidak cukup



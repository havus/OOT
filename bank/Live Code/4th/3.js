/**

Product Categories
==================

Implementasikan function productCategories untuk menghitung
jumlah barang yang dimiliki oleh kategori yang tersedia

Output yang diharapkan adalah Object Literal seperti contoh berikut:
{
  <Category>: <NumberOfItems>
}

# Contoh:
  - `products`: [
    ['Asus H110M-K', 840000, 'Motherboard'],
    ['Corsair DDR4 Dominator 16GB', 3450000, 'Memory'],
    ['Asus ROG Zenith Extreme', 8475000, 'Motherboard'],
    ['Logitech Z120', 130000, 'Speaker']
  ]
  - output: { Motherboard: 2, Memory: 1, Speaker: 1 }

  - `products`: []
  - output: 'Empty data'

# Aturan coding
- WAJIB menggunakan WHILE / FOR loop

*/

function productCategories(products) {
  let result = {};

  for (let i = 0; i < products.length; i++) {
    let same = false;
    for (let key in result) {
      if (products[i][2] === key) {
        same = true;
        result[products[i][2]] += 1;
        break;
      }
    }

    if (!same) {
      result[products[i][2]] = 1;
    }
  }

  return products.length === 0 ? 'Empty data' : result;
}
console.log(productCategories([
  ['Mouse Logitech', 150000, 'Mouse'],
  ['ATI Radeon', 800000, 'Graphic Card'],
  ['NVIDIA Card', 760000, 'Graphic Card'],
  ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
]));
// { Mouse: 1, 'Graphic Card': 2, Harddisk: 1 }

console.log(productCategories([
  ['Cooler Master MasterNotepal Maker', 720000, 'Cooler'],
  ['Cooler Master MasterNotepal Pro', 685000, 'Cooler'],
  ['Cooler Master Notepal Ergostand III', 540000, 'Cooler'],
  ['Cooler Master Notepal X3', 430000, 'Cooler']
]));
// { Cooler: 4 }

console.log(productCategories([]));
// Empty data

// Belajar Var, Hoisting, Let, dan Const

// function makeTea(isCold) {
//   if (isCold) {
//     var tea = "Make an Ice Tea!";
//   } else {
//     var tea = "Make a Hot Tea!";
//   }
//   return tea;
// }

// console.log(makeTea(false));
// Hoist adalah menggeret, menaikkan semua variabel bertipe var keatas terlebih dahulu baru mengeksekusi program. hoisting tidak bekerja pada variabel bertipe let dan const

// contoh kedua
// function getFood() {
//   food = "Pizza";
//   return food;
//   var food;
// }
// // getFood();
// console.log(getFood());

// Let dan Const
// let dan const sama sama tidak bisa dideklarasikan dua kali.
// let masih bisa dirubah isi variabel nya, const ga bisa dirubah
// const bisa dimodifikasi kalau tipe nya array (pake .push())

// let name = "Fahmi";
// // let name = "Rahman";
// name = "Rahman";
// console.log(name);

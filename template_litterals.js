// ES6 bisa langung mencetak tanpa penghubung (+), menggunakan backticks (`)

// contoh:
// `Halo ${user.nama}`

const user = {
  nama: "fahmi",
  alamat: "Tambun Selatan",
  umur: "20"
};

console.log(
  `Halo ${user.nama}! 
  
  anda berusia ${user.umur} 
  
  dan anda beralamat di ${user.alamat}`
);

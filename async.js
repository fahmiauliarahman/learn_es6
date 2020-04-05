const getCake = () => {
  let cake = null;
  console.log("Sedang Membuat Kue, silahkan tunggu...");
  setTimeout(() => {
    cake = "Kue Selesai!";
  }, 3000);
  return cake;
};

const roti = getCake();
console.log(roti);

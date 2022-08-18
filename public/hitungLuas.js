let alas = prompt("Masukkan alas dari segitiga : ");
let tinggi = prompt("Masukkan tinggi dari segitiga : ");

var luasSegitiga = 0.5 * parseInt(alas) * parseInt(tinggi);

document.getElementById("headang").innerHTML =
  "Luas dari perhitungan alas " +
  alas +
  " dan tinggi " +
  tinggi +
  " adalah " +
  luasSegitiga;

function generateTriangle(event) {
  event.preventDefault(); // agar tidak refresh saat submit

  // jangan dihapus atau diubah
  let tinggi = parseInt(document.getElementById("tinggiSegitiga").value);
  let karakter = document.getElementById("karakter").value;

  if (Number.isInteger(tinggi) && tinggi > 0) { // Gunakan operator "&&" untuk memeriksa kedua kondisi
    let segitiga = "";
    for (let i = 1; i <= tinggi; i++) { // Perubahan i++ agar loop berfungsi dengan benar
      for (let j = 0; j < tinggi - i; j++) { // Perubahan kondisi dan perulangan j agar sesuai
        segitiga += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= 2 * i - 1; k++) { // Perubahan k++ agar loop berfungsi dengan benar
        segitiga += karakter;
      }
      segitiga += "<br>";
    }

    // jangan dihapus atau diubah
    document.getElementById("triangleResult").innerHTML = segitiga;
  } else {
    document.getElementById("triangleResult").innerHTML = "Tinggi segitiga harus berupa bilangan bulat positif.";
  }
}

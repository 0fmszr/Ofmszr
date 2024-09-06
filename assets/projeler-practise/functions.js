// functions are used to create a new project and delete a project from the list of projects in the database 
function topla(a, b) {
    return a + b;
  }
  let sonuc = topla(5, 10); // sonuc değişkeni 15 olur.
console.log(sonuc); // 15 yazdırılır.
const carp = function(x, y) {
    return x * y;
  };
  console.log(carp(4, 5)); // 20 yazdırılır.
  const toplaa = (a, b) => a + b; // Aynı işlev, fakat daha kısa.
console.log(toplaa(2, 3)); // 5 yazdırılır.
const kare = x => x * x;
console.log(kare(4)); // 16
function selamla(isim) {
    console.log("Merhaba " + isim);
  }
  selamla("Fatih"); // Çıktı: Merhaba Fatih
  function topla(a = 5, b = 3) {
    return a + b;
  }
  console.log(topla()); // Çıktı: 8, çünkü varsayılan değerler kullanıldı.
  console.log(topla(10)); // Çıktı: 13, çünkü sadece `a` değeri verildi, `b` varsayılan olarak 3 kaldı.

  function fark(a, b) {
    return a - b;
  }
  let sonucc = fark(10, 5); // sonuc = 5
  console.log(sonucc); // 5
  function dışFonksiyon(x) {
    function içFonksiyon(y) {
      return x + y;
    }
    return içFonksiyon;
  }
  let yeniFonksiyon = dışFonksiyon(5); 
  console.log(yeniFonksiyon(10)); // Çıktı: 15
  function işlemler(fonksiyon, a, b) {
    return fonksiyon(a, b);
  }
  console.log(işlemler(topla, 5, 3)); // Çıktı: 8 (önceden tanımladığımız topla fonksiyonunu kullanır)
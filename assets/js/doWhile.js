document.getElementById("sonuc").innerText = result;

function doWhileExample() {
  var i = 5;
  var deger = "";
  do {
    deger += "Erhan ";
    i++;
  } while (i < 6);
  alert(deger);
}
//promp
 function prompToplama(){
    var sayi1 = prompt("sayı 1 giriniz");
    var sayi2 = prompt("sayı 2 giriniz");

    var sonuc = Number(sayi1) + Number(sayi2)
    alert(sonuc)
 }

 //Diziler - Array

 var dersler = new Array("Matematik", "Türkçe", "Fizik", "Kimya");
 alert(dersler[0]);
 alert(dersler.length);
 dersler.push("resim");
 dersler.push(25);//dizinin sonuna yeni eleman ekleme

 dersler.pop();//dizinin son elemanını siler

 dersler.unshift("Fizik")//seçilen elemanı başa alır

 console.log(dersler)

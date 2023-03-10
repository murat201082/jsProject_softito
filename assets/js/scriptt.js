function hesapla(){
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)
    
    var oprt = document.getElementById("islem").value;

    switch (oprt) {
        case "+":
        
            sonuc = sayi1 + sayi2;
            document.getElementById("sonuc").innerText = "sonuç = " + sonuc
            
            break;
        case "-":
            sonuc = sayi1 - sayi2;
            document.getElementById("sonuc").innerText = "sonuç = " + sonuc
            
            break;
        case "*":
            sonuc = sayi1 * sayi2;
            document.getElementById("sonuc").innerText = "sonuç = " + sonuc
            
            break;
        case "/":
            sonuc = sayi1 / sayi2;
            document.getElementById("sonuc").innerText = "sonuç = " + sonuc
            
            break;
    
        default:
            document.getElementById("sonuc").innerText = "Tanımsız Operatör " 
            break;
    }
    /*if(oprt == "+"){
    sonuc = sayi1 + sayi2
    document.getElementById("sonuc").innerText = "sonuç = " + sonuc
    }
   else if(oprt == "-"){
    sonuc = sayi1 - sayi2
    document.getElementById("sonuc").innerText = "sonuç = " + sonuc
    }
   else if(oprt == "*"){
    sonuc = sayi1 * sayi2
    document.getElementById("sonuc").innerText = "sonuç = " + sonuc
    }
   else if(oprt == "/"){
    sonuc = sayi1 / sayi2
    document.getElementById("sonuc").innerText = "sonuç = " + sonuc
    }
}
  
function notOrtalamasi(){
    var vize = Number(document.getElementById("vize").value);
    var final = Number(document.getElementById("final").value);
    var ortalama = (vize * 0.4) + (final * 0.6);
    //not < 45 kaldı
    // not 45<65 orta
    // not 65<85 iy
    // not >85 süper
    var sonuc ;
    if(ortalama < 45) {
        sonuc = "Kaldı. Not: " + ortalama
    }
   else if(ortalama < 65) {
        sonuc = "Orta. Not: " + ortalama
    }
   else if(ortalama < 85) {
        sonuc = "İyi. Not: " + ortalama
    }
   else if(ortalama >= 85) {
        sonuc = "Super. Not: " + ortalama
        document.getElementById("notsonuc").style.color="red";
    }*/
    document.getElementById("notsonuc").innerText = sonuc;
}
//Karar yapıları
// if - else if - else

//Döngüler

//For foreach while do while
/*var deger = "";
for(var i = 0; i <= 10; i++){
    deger += "javascript";
}
alert(deger);*/

function fHesaplama (){
    var deger = Number(document.getElementById("value").value);
    var sonuc = 1;
    for(let index = 1; index <= deger; index++){
        sonuc *= index;
    }
    alert(sonuc);
}

function whileLoop(){
    var i = 0;
    var deger = "";
    while(i<10){
        
        deger += "Merhaba";
        i++;
    }
    alert(deger);
}

function tekSayılar(){
    var sayi = 15;
    var deger = "";

    for(var i=0; i<=sayi;i++){
        if(i % 2 == 0) 
        continue;
        if(i == 13)
        break
        deger += i + " ";
        
    }
    alert(deger);
}

function boyHesapErkek(){
var boyE = Number(document.getElementById("erkekb").value)
var kiloE = Number(document.getElementById("erkekk").value)
var cinsiyet = document.getElementById("cinsiyet").value;
var boyendeks= 0;


switch (cinsiyet) {
    case "kadin":
        boyendeks= kiloE * 1.1 / (boyE * boyE)
        
        break;
    

   
}
if(boyendeks < 18.5){
    document.getElementById("boyendeks").innerText = "İdeal kilonun altında"
}
else if(boyendeks < 18.5 && boyendeks < 24.9){
    document.getElementById("boyendeks").innerText = "İdeal kilo"
}
else if(boyendeks < 25 && boyendeks < 29.9){
    document.getElementById("boyendeks").innerText = "İdeal kilo üstünde "
}


}

function metod1(){//değer almayan deger döndürmeyen
    alert("metod1")
    var deger = prompt("İsim giriniz");
    metod2(deger)
}

function metod2(item){//Değer alan deger döndürmeyen
    alert("Gelen deger :" + item)
}

function metod3(){
    var value = 5;
    return value;
}

function metod3Example(){
    var deger = metod3()*3;
   
    console.log(deger);
}

function metod4(r){//deger alan deger döndüren
    const pi = 3.14;
    var result = pi * (r*r);
    return result;
}

function metod4Example(){
    var deger = prompt("   r Lütfen deger giriniz")
    console.log("sonuc :"+ metod4(deger))
}
var dersler = new Array("Matematik", "Türkçe", "Fizik", "Kimya");

 dersler.push("resim");
 dersler.push(25);//dizinin sonuna yeni eleman ekleme

 dersler.pop();//dizinin son elemanını siler

 dersler.unshift("Fizik")//seçilen elemanı başa alır

 console.log(dersler)
 dersler.splice(2,1);//ikinci indexten başlar bir eleman siler
 console.log(dersler)
 dersler.splice(3,0,"Geometri")
 console.log(dersler)
 dersler.unshift("Erhan")
 console.log(dersler)

 
//f(x)=x*x + 2*x + 4 tek satır kapatma burası işlenmez
var x=2;
var y=10+x*x+2*x+4;
/*
Birden fazla satırın kapatilması, bu satırlarda işlenmez
Fonksiyon tanımla şekilleri
----------------------------------
Birden fazla satırda tanımlama yapmak istersek
var f=(x)=>{
return 10+x*x+2*x+4;
}
Tek satırda işlem yapan fonksiyon kendi içinde return barındırır
var f=(x) => (10+x*x+2*x+4)
*/

// Bu fonksiyon return sözcüğü bulunduğundan, çağıldığında return den sonraki ifade geri döndürülür
// Aşağıdak bir fonksiyon tanımlam şekli gmrülmektedir.
// Birden fazla satırda tanımlama yapmak istersek

function f(x){
// return den sonraki işlemi yap ver geri döndür
return 10+x*x+2*x+4;
}


console.log('x in değeri:',x,' y in değeri:',y);
console.log('-----------------------------------------');
console.log('x in değeri:',x,' f(x) in değeri:',f(x)); 
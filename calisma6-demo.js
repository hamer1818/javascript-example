function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}
var Kolon=0

for (j = 1; j < 9; j++) {
    
    console.log("Kolon: "+j)
    for (var i = 0 ; i < 6 ; i++) {
        Kolon++
        console.log(Kolon+". kolon" + " " + sayiUret())
    }
}


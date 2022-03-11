function ortalama(vize,final) {
    let ort=(vize*40/100)+(final*60/100);
    let sonuc;
    if(ort>=87 && ort<=100){
        sonuc = "AA";
    }else if (ort>=81 &&ort<=86) {
        sonuc = "BA";
    }else if (ort>=74 &&ort<=80) {
        sonuc = "BB";
    }else if (ort>=67 &&ort<=73) {
        sonuc = "CB";
    }else if (ort>=60 &&ort<=66) {
        sonuc = "CC";
    }else if (ort>=53 &&ort<=59) {
        sonuc = "DC";
    }else if (ort>=46 &&ort<=52) {
        sonuc = "DD";
    }else if (ort>=36 &&ort<=45) {
        sonuc = "FD";
    }else if (ort>=0 &&ort<=38) {
        sonuc = "FF";
    }else{
        sonuc = "Lutfen gecerli degerleri girin 0-100";
    }
    return sonuc;
}

 console.log(ortalama(50,80));
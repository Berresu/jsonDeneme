async function ekranaGetir(){
    const kaynak=await fetch('data.json');
    let veriler=await kaynak.json();
    console.log(veriler);

    veriler.ogrenciler.forEach(element => {
        let yeniOgrenci=document.createElement("li");
        document.getElementById("ogrencilerim").appendChild(yeniOgrenci);
        yeniOgrenci.innerHTML=element.isim+" "+element.soyisim+" "+element.ogrenciNumarasi+" "+element.yas+" "+element.cinsiyet;
    });
}

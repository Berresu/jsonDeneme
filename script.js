async function ekranaGetir(){
    const gelen=await fetch("data.json");
    let veri=await gelen.json(); 

    document.getElementById("txtIsim").innerHTML=veri.isim;
    document.getElementById("txtSoyisim").innerHTML=veri.soyisim;
    document.getElementById("numberNumarasi").innerHTML=veri.ogrenciNumarasi;
    document.getElementById("numberYasi").innerHTML=veri.yas;
    document.getElementById("txtCinsiyeti").innerHTML=veri.cinsiyet;
}

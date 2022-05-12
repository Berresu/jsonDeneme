let baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(baglanti.responseText);
    }
};
baglanti.open("GET", "data.json", true);
baglanti.send();

let ogrenci=JSON.parse(ogrenciler);
document.getElementById("txtIsim").innerHTML=ogrenci.employees[0].isim;
document.getElementById("txtSoyisim").innerHTML=ogrenci.employees[0].soyisim;
document.getElementById("numberNumarasi").innerHTML=ogrenci.employees[0].ogrenciNumarasi;
document.getElementById("numberYasi").innerHTML=ogrenci.employees[0].yas;
document.getElementById(txtCinsiyeti).innerHTML=ogrenci.employees[0].cinsiyet;
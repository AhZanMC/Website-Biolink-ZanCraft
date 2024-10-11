/*
    by AhZanMC

    jangan dihapus kode ini
*/

//Tanggal
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch (hari) {
  case 0: hari = "Minggu"; break;
  case 1: hari = "Senin"; break;
  case 2: hari = "Selasa"; break;
  case 3: hari = "Rabu"; break;
  case 4: hari = "Kamis"; break;
  case 5: hari = "Jum'at"; break;
  case 6: hari = "Sabtu"; break;
}
switch (bulan) {
  case 0: bulan = "Januari"; break;
  case 1: bulan = "Februari"; break;
  case 2: bulan = "Maret"; break;
  case 3: bulan = "April"; break;
  case 4: bulan = "Mei"; break;
  case 5: bulan = "Juni"; break;
  case 6: bulan = "Juli"; break;
  case 7: bulan = "Agustus"; break;
  case 8: bulan = "September"; break;
  case 9: bulan = "Oktober"; break;
  case 10: bulan = "November"; break;
  case 11: bulan = "Desember"; break;
}

//Jam
setInterval(jamdigital, 1000);
function jamdigital() {
  var time = new Date();
  var jam = time.getHours();
  var menit = time.getMinutes();
  var detik = time.getSeconds();

  //    document.getElementById('clock').innerHTML = "Pukul : " + jam + ":" + menit + ":" + detik;
  document.getElementById("datetime").innerHTML = hari + "," + tanggal + " " + bulan + " " + tahun + "<br>" + jam + ":" + menit + ":" + detik;
}

//Script
const shareButtonsHeader = document.querySelectorAll('.share-button')
console.log(shareButtonsHeader)
const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text : " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

shareButtonsHeader.forEach(shareButtonsHeader =>
  shareButtonsHeader.addEventListener('click', copyText))

//Satirin lewat javascript :v
console.log('Halo');
console.log('Buat kalian yang main-main ke websiteku,aku cuma pengen bilang :')
console.log('♡▀█▀ █▀ █▀▀▄ █ █▄░▄█ ▄▀▄♡\n♡░█░ █▀ █▐█▀ █ █░█░█ █▀█♡\n♡░▀░ ▀▀ ▀░▀▀ ▀ ▀░░░▀ ▀░▀♡\n❥█░▄▀ ▄▀▄ ▄▀▀ █ █░█☙\n❥█▀▄░ █▀█ ░▀▄ █ █▀█☙\n❥▀░▀▀ ▀░▀ ▀▀░ ▀ ▀░▀☙')
console.log('Literasi adalah kunci untuk mendapatkan link download mcpe,hanya bocah dongo yang suka nanya link mcpenya mana??,padahal ada di situ :V');

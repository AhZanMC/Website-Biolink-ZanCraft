/*
    by AhZanMC

    jangan dihapus kode ini
*/

// Ambil modal, overlay, dan tombol close
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.toggle-button');

// Tampilkan modal dan overlay otomatis saat halaman dimuat
window.onload = function() {
    setTimeout(() => {
        overlay.classList.add('show'); // Tampilkan overlay
        modal.classList.add('show'); // Tampilkan modal
        document.body.style.overflow = 'hidden'; // Nonaktifkan scroll pada body
    }, 1000); // Tampilkan setelah 1 detik
};

// Tutup modal dan overlay saat tombol close ditekan
closeButton.onclick = function() {
    modal.classList.remove('show'); // Hapus kelas show untuk menyembunyikan modal
    modal.classList.add('hide'); // Tambahkan kelas hide untuk animasi keluar
    overlay.classList.remove('show'); // Hapus kelas show untuk menyembunyikan overlay

    // Tunggu beberapa detik sebelum mengaktifkan kembali scroll dan menyembunyikan overlay
    setTimeout(() => {
        document.body.style.overflow = 'auto'; // Aktifkan kembali scroll pada body
        modal.classList.remove('hide'); // Hapus kelas hide setelah animasi
    }, 500); // Sesuaikan dengan durasi animasi
};

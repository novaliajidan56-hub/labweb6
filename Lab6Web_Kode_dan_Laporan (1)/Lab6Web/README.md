# Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling

**Nama:** Nauvali Ajidan Pratama Putra  
**NIM:** 312510177  
**Kelas:** I252A  
**Mata kuliah:** Pemrograman Web

## Tujuan
- Memahami DOM dan memilih elemen HTML.
- Mengubah teks dan class CSS dengan JavaScript.
- Menggunakan event `click`, `input`, `change`, `keydown`, dan `submit`.
- Membuat validasi form dan antarmuka interaktif.

## Struktur file
- `index.html` — struktur halaman.
- `style.css` — tampilan responsif.
- `script.js` — manipulasi DOM, event, validasi, dan fitur interaktif.
- `README.md` — petunjuk dan dokumentasi.
- `Laporan_Praktikum_6.pdf` — laporan praktikum.

## Cara menjalankan
1. Ekstrak folder `Lab6Web`.
2. Buka folder di Visual Studio Code.
3. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam folder yang sama.
4. Buka `index.html` di browser (atau gunakan ekstensi Live Server).
5. Uji seluruh fitur dan buka Developer Tools → Console untuk memeriksa error.

## Fitur yang dikerjakan
1. Manipulasi teks DOM dan menampilkan waktu ketika tombol diklik.
2. Toggle class `highlight` dan `teks-besar`.
3. Penghitung karakter real-time.
4. Form workshop dengan validasi nama minimal 3 karakter, email, dan sesi.
5. Ringkasan pendaftaran dan tombol reset.
6. To-do list: tambah, tandai selesai, dan hapus tugas.
7. Dropdown sesi menggunakan event `change`.
8. Tombol menyembunyikan/menampilkan paragraf.
9. Layout responsif untuk desktop dan perangkat mobile.

## Skenario pengujian
- Klik tombol aksi beberapa kali; waktu harus diperbarui.
- Klik `Toggle gaya`; gaya paragraf berubah dan kembali ketika diklik lagi.
- Ketik/hapus teks; penghitung karakter mengikuti panjang teks.
- Submit form kosong → pesan nama minimal 3 karakter.
- Isi nama valid tetapi email salah → pesan email tidak valid.
- Isi nama dan email valid tanpa sesi → pesan pilih sesi.
- Isi seluruh data valid → pesan sukses dan ringkasan muncul.
- Reset form → semua input dan pesan dibersihkan.
- Tambah tugas kosong → pesan peringatan.
- Tambah tugas, tandai selesai, lalu hapus → setiap fungsi berjalan.
- Klik tombol paragraf → paragraf disembunyikan/ditampilkan.

## Eksperimen mandiri
1. Tombol hapus satu tugas: sudah ditambahkan pada setiap item.
2. Nama minimal 3 karakter: sudah diterapkan pada validasi.
3. Event `change` dropdown sesi: sesi terpilih langsung ditampilkan.
4. Sembunyikan/tampilkan paragraf: menggunakan class `.hidden`.
5. Jika script dipindahkan ke `<head>` tanpa `defer`, JavaScript dapat berjalan sebelum elemen HTML selesai dibuat. Akibatnya, pemilihan elemen dapat menghasilkan `null` dan event listener gagal dipasang. Atribut `defer` menunda eksekusi sampai HTML selesai diparsing.

## Catatan pengumpulan
Ambil screenshot asli halaman dan setiap kondisi pengujian dari browser setelah menjalankan program. Tambahkan screenshot ke laporan/repository sebelum dikumpulkan. Buat repository bernama `Lab6Web`, commit seluruh file, lalu kirim URL repository sesuai instruksi dosen.

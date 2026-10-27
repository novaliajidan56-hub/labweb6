// Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling
"use strict";

// 1. Memilih elemen dan mengubah teks DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");
const ubahJudul = document.getElementById("ubahJudul");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString("id-ID");
});

ubahJudul.addEventListener("click", function () {
  judul.textContent = judul.textContent === "Belajar JavaScript DOM"
    ? "Judul diperbarui dengan DOM"
    : "Belajar JavaScript DOM";
});

// 2. Mengubah kelas dan gaya CSS dengan classList.toggle()
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// 3. Event input untuk penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// 4. Form pendaftaran workshop dan validasi
const form = document.getElementById("formPendaftaran");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const sesiDipilih = document.getElementById("sesiDipilih");
const pesanForm = document.getElementById("pesanForm");
const ringkasan = document.getElementById("ringkasan");
const resetForm = document.getElementById("resetForm");
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sesi.addEventListener("change", function () {
  sesiDipilih.textContent = sesi.value
    ? "Sesi dipilih: " + sesi.value
    : "Sesi yang dipilih akan tampil di sini.";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const namaValue = nama.value.trim();
  const emailValue = email.value.trim();

  pesanForm.className = "feedback";
  ringkasan.hidden = true;

  if (namaValue.length < 3) {
    pesanForm.textContent = "Nama wajib diisi dan minimal 3 karakter.";
    pesanForm.classList.add("error");
    nama.focus();
  } else if (!polaEmail.test(emailValue)) {
    pesanForm.textContent = "Masukkan alamat email yang valid.";
    pesanForm.classList.add("error");
    email.focus();
  } else if (sesi.value === "") {
    pesanForm.textContent = "Silakan pilih sesi workshop.";
    pesanForm.classList.add("error");
    sesi.focus();
  } else {
    pesanForm.textContent = "Pendaftaran berhasil divalidasi!";
    pesanForm.classList.add("success");
    ringkasan.textContent = "Ringkasan pendaftaran — Nama: " + namaValue
      + " | Email: " + emailValue + " | Sesi: " + sesi.value;
    ringkasan.hidden = false;
  }
});

resetForm.addEventListener("click", function () {
  form.reset();
  pesanForm.textContent = "";
  pesanForm.className = "feedback";
  ringkasan.textContent = "";
  ringkasan.hidden = true;
  sesiDipilih.textContent = "Sesi yang dipilih akan tampil di sini.";
  nama.focus();
});

// 5. To-do list: tambah, tandai selesai, dan hapus tugas
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

function tambahItemTugas() {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const baris = document.createElement("div");
  const label = document.createElement("span");
  const aksi = document.createElement("div");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");

  baris.className = "todo-item";
  aksi.className = "todo-actions";
  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.className = "secondary";
  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "secondary";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan" : "Tandai selesai";
  });

  hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas dihapus.";
  });

  aksi.append(selesai, hapus);
  baris.append(label, aksi);
  item.appendChild(baris);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas berhasil ditambahkan.";
  inputTugas.focus();
}

tambahTugas.addEventListener("click", tambahItemTugas);
inputTugas.addEventListener("keydown", function (event) {
  if (event.key === "Enter") tambahItemTugas();
});

// 6. Eksperimen: sembunyikan / tampilkan paragraf menggunakan class CSS
const paragrafToggle = document.getElementById("paragrafToggle");
const toggleParagraf = document.getElementById("toggleParagraf");

toggleParagraf.addEventListener("click", function () {
  paragrafToggle.classList.toggle("hidden");
  toggleParagraf.textContent = paragrafToggle.classList.contains("hidden")
    ? "Tampilkan paragraf" : "Sembunyikan paragraf";
});

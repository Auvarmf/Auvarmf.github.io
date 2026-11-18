import React from "react";

export default function ResumeArea() {
  return (
    <div className="resume-area no-padding" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="resume-wrapper wow fadeInUp delay-0-2s">
              <div className="resume-box">
                <span className="resume-date">2026 – Sekarang</span>
                <h2>Guru Informatika &amp; KKA</h2>
                <span>@ SMP Qur’an Teknologi Gajahmada</span>
                <p style={{ textAlign: "justify", hyphens: "auto" }}>
                  Mengajar Informatika untuk kelas 7–8 dan Koding &amp; Kecerdasan Artifisial
                  untuk kelas 7–9 dengan pendekatan analogi sehari-hari. Di luar kelas, saya
                  juga memegang peran IT Support, mengelola website sekolah lewat
                  CMSSekolahku, merawat laboratorium komputer, membina ekskul Desain Grafis,
                  dan menjalankan asesmen berbasis komputer (ASASBK) lewat Garuda CBT.
                </p>
              </div>
              <div className="resume-box">
                <span className="resume-date">2026 – Sekarang</span>
                <h2>Asisten Peneliti (Computer Vision &amp; ML)</h2>
                <span>@ Kolaborasi Riset Akademik</span>
                <p style={{ textAlign: "justify", hyphens: "auto" }}>
                  Eksperimen klasifikasi citra multi-backbone (DenseNet201,
                  ResNet50, EfficientNet, Xception, ViT, YOLOv8) dan pemodelan
                  regresi kualitas udara (ISPU). Benchmarking performa lintas
                  CPU/GPU dan penyusunan revisi manuskrip jurnal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="resume-wrapper wow fadeInUp delay-0-4s">
              <div className="resume-box">
                <span className="resume-date">2025</span>
                <h2>Sarjana Komputer (S.Kom)</h2>
                <span>@ Program Studi Ilmu Komputer</span>
                <p style={{ textAlign: "justify", hyphens: "auto" }}>
                  Skripsi: Perbandingan Model YOLOv8 dengan modifikasi backbone GoogleNet dan MobileNetV2 untuk mendeteksi citra Batik Lampung menggunakan metode transfer learning dan augmentasi citra. Fokus penelitian pada optimasi model deteksi objek berbasis deep learning dengan bahasa pemrograman Python.
                  (Python, Deep Learning).
                </p>
              </div>
              <div className="resume-box">
                <span className="resume-date">Berlangsung</span>
                <h2>Riset &amp; Proyek Mandiri</h2>
                <span>@ Self-directed</span>
                <p style={{ textAlign: "justify", hyphens: "auto" }}>
                  Pengembangan AGATRA (sistem administrasi &amp; presensi QR
                  sekolah), generator kartu pelajar QR otomatis, dan eksplorasi
                  computer vision seluruhnya diterapkan langsung di
                  lingkungan sekolah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
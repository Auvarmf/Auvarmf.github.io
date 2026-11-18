"use client";
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup';

const portfolio_images = [
  {
    id: 1,
    image: "/assets/images/projects/work1.jpg",
  },
  {
    id: 2,
    image: "/assets/images/projects/work2.jpg",
  },
  {
    id: 3,
    image: "/assets/images/projects/work3.jpg",
  },
  {
    id: 4,
    image: "/assets/images/projects/work4.jpg",
  },
]

export default function SingleProjectArea() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const image = portfolio_images.slice(0, 5).map((item) => item.image);

  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="/assets/images/projects/work2.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info"><p>Year</p><h3>2025 – Sekarang</h3></div>
                <div className="single-info"><p>Client</p><h3>SMP Qur’an Teknologi Gajahmada</h3></div>
                <div className="single-info"><p>Services</p><h3>Full-Stack Development</h3></div>
                <div className="single-info"><p>Project</p><h3>School Management System</h3></div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>
                  AGATRA adalah aplikasi web full-stack untuk manajemen sekolah dan
                  pencatatan kehadiran siswa maupun guru menggunakan pemindaian QR Code
                  dinamis. Dilengkapi jurnal mengajar, manajemen nilai, dan hak akses
                  berbasis peran (role-based access control).
                </p>
                <p>
                  Dibangun dengan React di sisi klien, PHP Native di backend, dan MySQL
                  sebagai basis data — dioptimalkan untuk berjalan di shared hosting tanpa
                  overhead framework berat. Sistem ini telah digunakan untuk operasional
                  harian sekolah dan pelaksanaan asesmen berbasis komputer.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div key={item.id} className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img src={item.image} style={{ width: "100%", height: "auto" }} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && photoIndex !== null && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  )
}
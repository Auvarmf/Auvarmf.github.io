import React from "react";

export default function ServiceArea() {
  return (
    <section id="services" className="services-area no-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-2s">
              <i className="ri-arrow-right-up-line"></i>
              <h5>01</h5>
              <h4>Full-Stack Web Development</h4>
              <p>
                Sistem web ringan dan responsif dengan React, PHP Native, dan
                MySQL — dioptimalkan untuk shared hosting tanpa overhead
                framework berat.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-4s">
              <i className="ri-arrow-right-up-line"></i>
              <h5>02</h5>
              <h4>Computer Vision &amp; ML Research</h4>
              <p>
                Eksperimen dan benchmarking model deep learning (CNN, ViT,
                YOLOv8) untuk klasifikasi citra dan pemodelan regresi.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-6s">
              <i className="ri-arrow-right-up-line"></i>
              <h5>03</h5>
              <h4>IT Education &amp; Training</h4>
              <p>
                Pengajaran Informatika, Koding, dan Kecerdasan Artifisial
                dengan pendekatan analogi praktis untuk SMP.
              </p>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-8s">
              <i className="ri-arrow-right-up-line"></i>
              <h5>04</h5>
              <h4>School IT Infrastructure</h4>
              <p>
                Administrasi CMS sekolah, laboratorium komputer, jaringan
                lokal, dan pelaksanaan ujian berbasis komputer (CBT).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
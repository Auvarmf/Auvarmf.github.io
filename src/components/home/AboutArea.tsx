import React from "react";
import Count from "../common/Count";

const counter_data = [
  { id: 1, title: "Years Teaching", count: 1, cls: "plus" },
  { id: 2, title: "Projects Built", count: 10, cls: "plus" },
  { id: 3, title: "AI Models Explored", count: 6, cls: "plus" },
];

export default function AboutArea() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-3">
            <h2 className="about-pre-title">About Me</h2>
          </div>
          <div className="col-lg-9 col-sm-9">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <p style={{ textAlign: "justify", hyphens: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}>
                Saya lulusan Computer Science dengan keseharian di tiga bidang: mengajar,
                membangun aplikasi web, dan meneliti kecerdasan artifisial. Saat ini saya
                mengajar Informatika serta Koding &amp; Kecerdasan Artifisial di SMP,
                sambil merangkap sebagai pengelola infrastruktur IT dan pengembang sistem
                informasi sekolah. Di luar jam mengajar, saya ikut serta dalam riset
                Computer Vision &amp; Machine Learning bersama dosen. Prinsip kerja saya
                sederhana: bangun sistem yang ringan, efisien, dan benar-benar dipakai
                orang.
              </p>
            </div>
            <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
              {counter_data.map((item, i) => (
                <div key={i} className="counter-item counter-text-wrap">
                  <span className={`count-text ${item.cls}`}>
                    <Count number={item.count} />
                  </span>
                  <span className="counter-title">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'

export default function Breadcrumb({ title, style_2, style_3, style_4 }: any) {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>{title}</h2>
              {style_2 &&
                <p>Kumpulan proyek, riset, dan sistem yang saya bangun — dari web full-stack hingga eksperimen computer vision.</p>
              }
              {style_3 &&
                <p>Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours.</p>
              }
              {style_4 &&
                <p>Arsip video tutorial, eksplorasi teknologi, dan rekam jejak belajar Ilmu Komputer.</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

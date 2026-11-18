import React from "react";
import Link from "next/link";

export default function BlogArea() {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title wow fadeInUp delay-0-2s">
              <h2>Media</h2>
            </div>
          </div>
        </div>

        <div className="row blog-post-box align-items-center">
          <div className="col-lg-6">
            <div className="blog-post-img">
              <Link href="/blog-details">
                <img src="/assets/images/blog/blog-1.jpg" alt="Arsip Kanal YouTube" />
              </Link>
              <div className="blog-post-category">
                <Link href="/blog">YouTube</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-post-caption">
              <h3>Arsip 2021–2023</h3>
              <h2>
                <Link className="link-decoration" href="/blog-details">
                  Arsip Kanal YouTube: Perjalanan Belajar &amp; Eksplorasi Ilmu Komputer
                </Link>
              </h2>
              <Link className="theme-btn theme-btn-two" href="/blog-details">
                Read more <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
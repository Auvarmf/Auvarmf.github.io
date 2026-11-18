"use client";
import React from "react";
import Link from "next/link";

export default function PostboxArea() {
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-8">
            <div className="postbox__wrapper">
              <article className="postbox__item format-image mb-50 transition-3">
                <div className="postbox__thumb w-img">
                  <Link href="/blog-details">
                    <img
                      src="/assets/images/blog/blog1.jpg"
                      alt="Arsip Kanal YouTube"
                    />
                  </Link>
                </div>
                <div className="postbox__content">
                  <div className="postbox__meta">
                    <span>
                      <i className="fa-light fa-user"></i>Auvar Mahsa Fahlevi
                    </span>
                    <span>
                      <i className="fa-light fa-clock"></i>2021–2023
                    </span>
                  </div>
                  <h3 className="postbox__title">
                    <Link href="/blog-details">
                      Arsip Kanal YouTube: Perjalanan Belajar &amp; Eksplorasi Ilmu Komputer
                    </Link>
                  </h3>
                  <div className="postbox__text">
                    <p>
                      Rekam jejak video tutorial akademis, tugas praktikum
                      pemrograman, hingga eksplorasi teknologi selama masa
                      perkuliahan dan pengembangan diri di bidang Ilmu Komputer
                      — dari Java &amp; OOP hingga kecerdasan artifisial.
                    </p>
                  </div>
                  <div className="postbox__read-more">
                    <Link href="/blog-details" className="theme-btn">
                      Baca selengkapnya
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* ===== Sidebar ===== */}
          <div className="col-xxl-4 col-lg-4">
            <div className="blog_sidebar__wrapper pl-40">
              <div className="sidebar__widget mb-20">
                <div className="sidebar__widget-content">
                  <div className="sidebar__search">
                    <form action="#">
                      <div className="sidebar__search-input">
                        <input type="text" placeholder="Cari artikel..." />
                        <button type="submit">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.0002 19.0002L17.2002 17.2002"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="sidebar__widget mb-45">
                <div className="sidebar__widget-content">
                  <div className="sidebar__author">
                    <div className="sidebar__author-thumb">
                      <img
                        src="/assets/images/blog/author.jpg"
                        alt="Auvar Mahsa Fahlevi"
                      />
                    </div>
                    <div className="sidebar__author-content">
                      <h3 className="sidebar__author-title">
                        Auvar Mahsa Fahlevi
                      </h3>
                      <p>
                        Pendidik, full-stack developer, dan peneliti Computer
                        Vision &amp; ML di Metro, Lampung.
                      </p>
                      <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                        <a
                          href="https://www.youtube.com/@auvarmf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a
                          href="https://github.com/auvarmf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                          href="https://linkedin.com/in/auvarmf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar__widget mb-45">
                <h3 className="sidebar__widget-title">Category</h3>
                <div className="sidebar__widget-content">
                  <ul>
                    <li>
                      <Link href="/blog">
                        YouTube Archive <span>01</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar__widget mb-40">
                <h3 className="sidebar__widget-title">Tags</h3>
                <div className="sidebar__widget-content">
                  <div className="tagcloud">
                    <a href="#">YouTube</a>
                    <a href="#">Java</a>
                    <a href="#">OOP</a>
                    <a href="#">AI</a>
                    <a href="#">Tutorial</a>
                    <a href="#">Pemrograman</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
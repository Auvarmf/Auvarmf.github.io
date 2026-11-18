import Link from "next/link";
import React from "react";

export default function BlogDetailsArea() {
  return (
    <section className="postbox__area grey-bg-4 pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="postbox__wrappers">
              <div className="postbox__mains">
                <div className="row">
                  {/* ==== KONTEN ARTIKEL ==== */}
                  <div className="col-lg-8">
                    <div className="postbox__main-wrapper">
                      <div className="postbox__thumb w-img mb-30">
                        <img
                          src="/assets/images/blog/blog1.jpg"
                          alt="Arsip Kanal YouTube Auvar MF"
                        />
                      </div>

                      <div className="postbox__meta">
                        <span>
                          <i className="fa-light fa-user"></i>Auvar Mahsa Fahlevi
                        </span>
                        <span>
                          <i className="fa-light fa-clock"></i>2021–2023
                        </span>
                      </div>

                      <div className="postbox__details-content-wrapper">
                        <p>
                          Halaman ini mendokumentasikan sebagian kecil arsip
                          video dari kanal YouTube <strong>Auvar MF</strong>{" "}
                          (
                          <a
                            href="https://www.youtube.com/@auvarmf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#ff6b35", textDecoration: "underline" }}
                          >
                            @auvarmf
                          </a>
                          ). Kanal ini berisi rekam jejak video tutorial
                          akademis, tugas praktikum pemrograman, hingga
                          eksplorasi teknologi selama masa perkuliahan dan
                          pengembangan diri di bidang Ilmu Komputer (
                          <em>Computer Science</em>).
                        </p>

                        <h4>Panduan Pengembangan Java (Netbeans &amp; JDK)</h4>
                        <ul>
                          <li>
                            <a
                              href="http://www.youtube.com/watch?v=93KVmNjV6B8"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>
                                Proses Instalasi Netbeans dan Path JDK (Java)
                              </strong>
                            </a>
                            <br />
                            Panduan langkah demi langkah dalam menyiapkan
                            lingkungan pengembangan Java bagi pemula. (
                            <em>24 Agustus 2022</em>)
                          </li>
                        </ul>

                        <h4>Pemrograman Berorientasi Objek (PBO)</h4>
                        <ul>
                          <li>
                            <a
                              href="http://www.youtube.com/watch?v=e63EqOTppTg"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>
                                Penjelasan dan Implementasi Inheritance pada JAVA
                              </strong>
                            </a>
                            <br />
                            Pembahasan konsep pewarisan (
                            <em>inheritance</em>) untuk membangun struktur kelas
                            yang efisien. (<em>2 November 2022</em>)
                          </li>
                          <li>
                            <a
                              href="http://www.youtube.com/watch?v=zqMKfAqrsm0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>
                                Penjelasan dan Implementasi Abstract Class dan
                                Interface
                              </strong>
                            </a>
                            <br />
                            Kelanjutan materi OOP mendalam mengenai implementasi
                            kelas abstrak dan antarmuka (<em>interface</em>). (
                            <em>9 November 2022</em>)
                          </li>
                        </ul>

                        <h4>Kecerdasan Buatan &amp; Logika Pemrograman</h4>
                        <ul>
                          <li>
                            <a
                              href="http://www.youtube.com/watch?v=9x9--jr4Y0g"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>UTP Artificial Intelligence</strong>
                            </a>
                            <br />
                            Dokumentasi Ujian Tengah Praktikum Kecerdasan
                            Artifisial. (<em>16 April 2023</em>)
                          </li>
                          <li>
                            <a
                              href="http://www.youtube.com/watch?v=XqVal8havgo"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>
                                RespLogika_Tugas4_2117051027_Auvar Mahsa Fahlevi
                              </strong>
                            </a>
                            <br />
                            Dokumentasi penyelesaian tugas dan responsi logika
                            pemrograman. (<em>4 Desember 2021</em>)
                          </li>
                        </ul>

                        <p>
                          <em>
                            Catatan: arsip ini akan terus diperbarui seiring
                            bertambahnya proyek pengembangan perangkat lunak,
                            materi pembelajaran, serta eksperimen teknologi
                            terbaru.
                          </em>
                        </p>
                      </div>

                      <div className="postbox__share-wrapper mb-60">
                        <div className="row align-items-center">
                          <div className="col-xl-7">
                            <div className="tagcloud tagcloud-sm">
                              <span>Tags:</span>
                              <a href="#">YouTube</a>
                              <a href="#">Java</a>
                              <a href="#">OOP</a>
                              <a href="#">AI</a>
                              <a href="#">Tutorial</a>
                            </div>
                          </div>
                          <div className="col-xl-5">
                            <div className="postbox__share text-xl-end">
                              <span>Share On:</span>
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
                  </div>

                  {/* ==== SIDEBAR ==== */}
                  <div className="col-xxl-4 col-lg-4">
                    <div className="blog_sidebar__wrapper pl-40">
                      <div className="sidebar__widget mb-20">
                        <div className="sidebar__widget-content">
                          <div className="sidebar__search">
                            <form action="#">
                              <div className="sidebar__search-input">
                                <input
                                  type="text"
                                  placeholder="Cari artikel..."
                                />
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
                                Pendidik, full-stack developer, dan peneliti
                                Computer Vision &amp; ML di Metro, Lampung.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
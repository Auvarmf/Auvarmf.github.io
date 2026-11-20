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
                          src="/assets/images/blog/HA-BIT.png"
                          alt="HA-BIT — HABIT-First Web Blueprint"
                        />
                      </div>

                      <div className="postbox__meta">
                        <span>
                          <i className="fa-light fa-user"></i>Auvar Mahsa Fahlevi
                        </span>
                        <span>
                          <i className="fa-light fa-clock"></i>2026
                        </span>
                      </div>

                      <div className="postbox__details-content-wrapper">
                        <p>
                          <strong>HA-BIT (HABIT-First Web Blueprint)</strong> adalah
                          kerangka kerja tiga langkah —{" "}
                          <em>Data → Kebiasaan Pengguna → Implementasi</em> — untuk
                          merumuskan kebutuhan sistem informasi berbasis web yang
                          berakar pada alur kerja nyata pengguna, sehingga
                          blueprint atau PRD lebih terarah dan aplikasi lebih mudah
                          diterima saat digunakan.
                        </p>

                        <h4>1. Mengapa Sebuah Pekerjaan Perlu Dibantu Website?</h4>
                        <p>
                          Sebelum membahas framework, database, atau tampilan
                          antarmuka, selalu ada satu pertanyaan dasar yang layak
                          diajukan: mengapa suatu hal atau pekerjaan perlu dibantu
                          atau diubah ke dalam bentuk website?
                        </p>
                        <p>
                          Dalam banyak kasus di lapangan, sebuah pekerjaan
                          sebenarnya sudah berjalan dengan caranya sendiri. Ada
                          data yang dicatat, ada rutinitas yang dilakukan setiap
                          hari atau setiap pekan, dan ada hasil akhir yang harus
                          disetorkan atau dilaporkan. Masalahnya, ketika cara
                          tersebut masih bertumpu pada catatan terpisah, rekap
                          manual berulang, atau proses yang bergantung pada
                          ingatan dan berkas tersebar, pekerjaan menjadi lambat,
                          rawan selip, dan menyulitkan penelusuran ulang.
                        </p>
                        <p>Website menjadi relevan ketika ia mampu menjawab kebutuhan praktis seperti:</p>
                        <ul>
                          <li>
                            Memusatkan data dan alur kerja agar bisa diakses lewat
                            peramban tanpa instalasi rumit di tiap perangkat.
                          </li>
                          <li>
                            Mengurangi pekerjaan berulang seperti input ganda,
                            salin & tempel antarberkas, atau rekap manual yang
                            memakan waktu.
                          </li>
                          <li>
                            Menjaga konsistensi pencatatan dan hasil sehingga
                            proses harian lebih rapi tanpa memaksa pengguna
                            belajar cara kerja yang benar-benar asing.
                          </li>
                        </ul>
                        <p>
                          Dari pengalaman merancang dan membangun aplikasi web,
                          saya melihat satu pola penting: pada dasarnya, website
                          meniru kebiasaan kita lalu merapikan bagian-bagian
                          yang selama ini menghambat. Ketika sistem terlalu jauh
                          dari kebiasaan nyata pengguna, resistensinya besar.
                          Sebaliknya, ketika sistem berangkat dari kebiasaan yang
                          sudah dikenali lalu menata ulang alurnya agar lebih
                          efisien, pengguna jauh lebih cepat menangkap fungsi
                          tiap fitur.
                        </p>

                        <h4>2. Mengenal HA-BIT (HABIT-First Web Blueprint)</h4>
                        <p>
                          HA-BIT adalah singkatan sekaligus nama utama kerangka
                          analisis kebutuhan yang saya gunakan untuk menyusun
                          blueprint atau <em>Product Requirements Document</em>{" "}
                          (PRD) aplikasi web secara ringkas dan aplikatif.
                        </p>
                        <p>
                          Secara sederhana, HA-BIT membagi proses perencanaan
                          sistem ke dalam tiga tahap berurutan:
                        </p>
                        <ul>
                          <li>
                            <strong>Data</strong> → Inventarisasi Aset Data
                          </li>
                          <li>
                            <strong>Kebiasaan Pengguna</strong> → Analisis
                            Aktivitas &amp; Pemrosesan Data (inti blueprint/PRD)
                          </li>
                          <li>
                            <strong>Implementasi</strong> → Eksekusi Desain,
                            Fitur &amp; Peluncuran Bertahap
                          </li>
                        </ul>
                        <p>
                          Pendekatan ini sengaja dibuat tidak bertele-tele.
                          Tujuannya agar siapa pun pengembang, pemilik sistem,
                          maupun pengguna akhir dapat melihat benang merah
                          antara apa yang dimiliki, apa yang dikerjakan, dan
                          bagaimana website dibangun.
                        </p>

                        <h4>3. Bedah Tiga Tahap dalam HA-BIT</h4>

                        <h5>Tahap 1 → Memetakan Data yang Dimiliki Pengguna</h5>
                        <p>
                          Langkah pertama dalam HA-BIT adalah bertanya: data apa
                          saja yang sebenarnya dimiliki dan dipakai oleh pengguna?
                        </p>
                        <p>
                          Jika konteksnya adalah lingkungan sekolah, misalnya,
                          data tersebut bisa berupa data sekolah, data guru, data
                          siswa, data kelas/jadwal, hingga catatan kehadiran atau
                          penilaian. Pada tahap lain, bisa berupa data barang,
                          data pengguna/anggota, atau catatan aktivitas
                          operasional.
                        </p>
                        <p>Pada tahap ini, penting untuk memetakan:</p>
                        <ul>
                          <li>
                            <strong>Kelompok &amp; atribut utama data</strong> →
                            informasi apa saja yang benar-benar dibutuhkan dan
                            sering dicari?
                          </li>
                          <li>
                            <strong>Sumber data saat ini</strong> → apakah data
                            masih tersebar di lembar catatan, tabel rekap
                            terpisah, arsip dokumen, atau informasi lisan?
                          </li>
                          <li>
                            <strong>Sifat data</strong> → mana yang merupakan data
                            master (relatif tetap dan menjadi rujukan) dan mana
                            yang merupakan data transaksi atau aktivitas (muncul
                            atau berubah secara berkala).
                          </li>
                          <li>
                            <strong>Titik rawan data</strong> → di mana biasanya
                            terjadi data kosong, salah format, atau duplikasi?
                          </li>
                        </ul>
                        <p>
                          Memetakan data sejak awal mencegah kita membangun fitur
                          yang &ldquo;kosong&rdquo; karena tidak tahu informasi
                          apa yang sebenarnya menjadi bahan baku sistem.
                        </p>

                        <h5>Tahap 2 → Menganalisis Kebiasaan &amp; Alur Kerja (Jantung Blueprint/PRD)</h5>
                        <p>
                          Setelah tahu data apa yang ada, tahap kedua masuk ke
                          bagian paling krusial: menganalisis kegiatan atau
                          kebiasaan pengguna dengan bertanya apa saja yang mereka
                          lakukan atau kerjakan.
                        </p>
                        <p>
                          Di sinilah arah sistem ditentukan. Pertanyaan
                          &ldquo;apa yang dikerjakan?&rdquo; bukan sekadar daftar
                          aktivitas harian, melainkan pintu masuk untuk
                          merumuskan bagaimana data harus diproses di dalam
                          website sehingga terbentuk blueprint atau PRD yang
                          jelas.
                        </p>
                        <p>Hal-hal yang digali pada tahap ini meliputi:</p>
                        <ul>
                          <li>
                            <strong>Rutinitas &amp; urutan kerja nyata</strong> →
                            bagaimana alur pekerjaan berjalan dari awal sampai
                            selesai? Siapa melakukan apa, kapan waktunya, dan
                            alat apa yang dipakai sekarang?
                          </li>
                          <li>
                            <strong>Titik gesekan (pain points)</strong> → bagian
                            mana yang paling sering memakan waktu, menumpuk di
                            akhir periode, berulang-ulang diinput, atau sering
                            memicu kesalahan?
                          </li>
                          <li>
                            <strong>Aturan pemrosesan data di website</strong> →
                            kapan data diinput, diperbarui, atau divalidasi?
                            Bagaimana status atau kategori data berubah
                            berdasarkan aksi pengguna? Bagaimana data
                            dikelompokkan, disaring, atau direkap menjadi
                            informasi yang siap dibaca?
                          </li>
                          <li>
                            <strong>Hasil (output) yang dibutuhkan</strong> →
                            tampilan ringkasan, daftar status, pencarian cepat,
                            atau rekap/laporan apa yang sebenarnya dibutuhkan
                            untuk mengambil keputusan?
                          </li>
                        </ul>
                        <p>
                          Prinsip penting di Tahap 2: meniru kebiasaan bukan
                          berarti menyalin kekurangannya secara mentah. Kebiasaan
                          yang sudah berjalan baik dipertahankan agar terasa
                          natural, sementara bagian yang lambat atau rawan salah
                          dirapikan melalui alur sistem di dalam blueprint atau
                          PRD.
                        </p>

                        <h5>Tahap 3 → Implementasi</h5>
                        <p>
                          Setelah data terpetakan dan kebiasaan kerja
                          diterjemahkan menjadi blueprint atau PRD, barulah masuk
                          ke Tahap 3: Implementasi, yakni tahap pembuatan sistem
                          seperti umumnya.
                        </p>
                        <p>Pada tahap ini, hasil analisis diterjemahkan menjadi wujud nyata:</p>
                        <ul>
                          <li>
                            <strong>Perancangan struktur &amp; antarmuka</strong>{" "}
                            → menyusun skema penyimpanan data, alur halaman, dan
                            tampilan yang mudah dipindai sesuai tugas pengguna.
                          </li>
                          <li>
                            <strong>Pembangunan fitur secara bertahap</strong> →
                            mendahulukan fitur yang menopang kebiasaan utama
                            sehari-hari agar inti sistem cepat berfungsi, lalu
                            melengkapi fitur pendukung dan penyempurnaan.
                          </li>
                          <li>
                            <strong>Pengujian berdasarkan alur nyata</strong> →
                            menguji sistem menggunakan skenario kerja dan data
                            yang menyerupai kondisi asli, bukan sekadar memastikan
                            tombol bisa diklik.
                          </li>
                          <li>
                            <strong>Evaluasi &amp; iterasi</strong> → memantau
                            bagaimana sistem dipakai setelah berjalan, lalu
                            menyesuaikan bagian yang masih terasa kurang pas.
                          </li>
                        </ul>

                        <h4>4. Contoh Ilustrasi Singkat</h4>
                        <p>
                          Bayangkan sebuah pengelolaan administrasi dan
                          pencatatan aktivitas rutin di sebuah unit kerja atau
                          lembaga pendidikan:
                        </p>
                        <p>
                          <strong>Sebelum memakai sistem terarah</strong> → data
                          identitas dan catatan aktivitas berada di tempat
                          terpisah, rekap dilakukan belakangan dengan menyalin
                          ulang dari beberapa sumber, sehingga pengecekan status
                          memakan waktu.
                        </p>
                        <p>
                          <strong>Dengan HA-BIT</strong>:
                        </p>
                        <ul>
                          <li>
                            <strong>Data</strong> → dikumpulkan dulu daftar
                            entitas utama dan data catatan aktivitas beserta
                            atribut pentingnya.
                          </li>
                          <li>
                            <strong>Kebiasaan</strong> → ditelaah bagaimana
                            pencatatan dilakukan sehari-hari, siapa yang mengisi,
                            bagaimana statusnya dicek, dan rekap apa yang rutin
                            diminta. Dari sini disusun blueprint mengenai form
                            input, aturan status/validasi, pencarian/filter, dan
                            tampilan rekap.
                          </li>
                          <li>
                            <strong>Implementasi</strong> → dibangun mulai dari
                            pengelolaan data dasar dan alur pencatatan utama,
                            diuji alurnya, lalu dirapikan berdasarkan umpan balik
                            pemakaian nyata.
                          </li>
                        </ul>

                        <h4>5. Mengapa Pendekatan Ini Efektif</h4>
                        <ul>
                          <li>
                            <strong>Komunikasi lebih membumi</strong> →
                            pembahasan kebutuhan tidak langsung tenggelam dalam
                            istilah teknis yang membingungkan pihak non-teknis,
                            karena bahasanya berangkat dari data dan kebiasaan
                            kerja mereka sendiri.
                          </li>
                          <li>
                            <strong>PRD / blueprint punya dasar yang jelas</strong>{" "}
                            → setiap fitur punya alasan yang terhubung langsung
                            ke aktivitas dan pemrosesan data, mengurangi fitur
                            &ldquo;bagus di atas kertas, jarang dipakai di
                            lapangan&rdquo;.
                          </li>
                          <li>
                            <strong>Adaptasi pengguna lebih mulus</strong> →
                            karena alur sistem selaras dengan pola kerja yang
                            sudah dikenal, kurva belajar pengguna cenderung lebih
                            singkat.
                          </li>
                          <li>
                            <strong>Fleksibel untuk berbagai skala</strong> →
                            cocok dipakai baik saat merancang aplikasi web
                            mandiri maupun saat menyusun spesifikasi kerja
                            bersama tim atau AI coding assistant.
                          </li>
                        </ul>

                        <h4>6. Penutup</h4>
                        <p>
                          Bagi saya, merancang sistem informasi berbasis web
                          bukan sekadar memindahkan formulir atau tabel ke layar
                          browser. Ia adalah upaya memahami data apa yang hidup
                          di sebuah pekerjaan, bagaimana kebiasaan manusia
                          menggerakkan data tersebut, lalu membangun sistem yang
                          membantu ritme itu berjalan lebih tertib.
                        </p>
                        <p>
                          Melalui <strong>HA-BIT (HABIT-First Web Blueprint)</strong>,
                          proses dari pertanyaan &ldquo;mengapa ini perlu
                          dibuatkan website?&rdquo; hingga blueprint siap
                          eksekusi menjadi lebih runtut, jelas, dan membumi.
                        </p>
                      </div>

                      <div className="postbox__share-wrapper mb-60">
                        <div className="row align-items-center">
                          <div className="col-xl-7">
                            <div className="tagcloud tagcloud-sm">
                              <span>Tags:</span>
                              <a href="#">System Analysis</a>
                              <a href="#">PRD</a>
                              <a href="#">Web Blueprint</a>
                              <a href="#">Methodology</a>
                            </div>
                          </div>
                          <div className="col-xl-5">
                            <div className="postbox__share text-xl-end">
                              <span>Share On:</span>
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
                              <a
                                href="https://instagram.com/auvarmf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa-brands fa-instagram"></i>
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
                        <h3 className="sidebar__widget-title">Recent Post</h3>
                        <div className="sidebar__widget-content">
                          <div className="sidebar__post">
                            <div className="rc__post d-flex align-items-center">
                              <div className="rc__post-thumb">
                                <Link href="/blog-details">
                                  <img
                                    src="/assets/images/blog/blog1.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title">
                                  <Link href="/blog-details">
                                    Arsip Kanal YouTube
                                  </Link>
                                </h3>
                                <div className="rc__meta">
                                  <span>2026</span>
                                </div>
                              </div>
                            </div>
                            <div className="rc__post d-flex align-items-center">
                              <div className="rc__post-thumb">
                                <Link href="/blog-details/HA-BIT">
                                  <img
                                    src="/assets/images/blog/HA-BIT.png"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title">
                                  <Link href="/blog-details/HA-BIT">
                                    HA-BIT — HABIT-First Web Blueprint
                                  </Link>
                                </h3>
                                <div className="rc__meta">
                                  <span>2026</span>
                                </div>
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
                            <li>
                              <Link href="/blog">
                                System Analysis <span>01</span>
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
                            <a href="#">PRD</a>
                            <a href="#">System Analysis</a>
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
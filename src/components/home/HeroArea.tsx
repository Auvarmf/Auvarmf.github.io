import React from "react";
import Link from "next/link";

export default function HeroArea() {
  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content wow fadeInUp text-center delay-0-2s">
              <h2>Auvar Mahsa Fahlevi</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 pt-30">
            <div className="hero-content wow fadeInUp delay-0-2s">
              <div className="clienti-reviews">
                <div className="reviews">
                  Educator <span>· Developer · Researcher</span>
                  <p>Bridging Education, AI, and Pragmatic Web Engineering.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/assets/images/about/me-2.jpg" alt="Auvar Mahsa Fahlevi" />
            </div>
          </div>
          <div className="col-lg-3 pt-30">
            <div className="hero-content wow fadeInUp delay-0-4s">
              <p>
                S.Kom. Guru Informatika &amp; KKA di SMP Qur’an Teknologi
                Gajahmada, full-stack developer, dan peneliti Computer Vision
                &amp; Machine Learning.
              </p>
              <Link className="theme-btn" href="/contact">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
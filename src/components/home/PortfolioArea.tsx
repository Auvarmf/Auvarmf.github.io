"use client"
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup';

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: "/assets/images/projects/work-1.jpg",
    title: "AGATRA — School Admin & QR Attendance",
    category: "Full-Stack Web",
  },
  {
    id: 2,
    col: "6",
    image: "/assets/images/projects/work-2.png",
    title: "Face Recognition Student Attendance (Thesis)",
    category: "Deep Learning",
  },
  {
    id: 3,
    col: "4",
    image: "/assets/images/projects/work-3.jpg",
    title: "Automatic QR Student Card Generator",
    category: "Automation",
  },
  {
    id: 4,
    col: "4",
    image: "/assets/images/projects/work-4.jpg",
    title: "Multi-Backbone Image Classification",
    category: "Research",
  },
  {
    id: 5,
    col: "4",
    image: "/assets/images/projects/work-5.jpg",
    title: "ISPU Air Quality Regression",
    category: "Research",
  },
];

export default function PortfolioArea() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const image = portfolio_data.slice(0, 5).map((item) => item.image);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="/assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={item.id} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="portfolio-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
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
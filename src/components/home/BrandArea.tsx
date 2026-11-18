"use client"
import React, { useEffect } from 'react'

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Tech Stack I Use Daily</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    <img src="/assets/images/skills/skill1.svg" alt="React" />        {/* ← baris ini */}
                    <img src="/assets/images/skills/skill2.svg" alt="PHP" />
                    <img src="/assets/images/skills/skill3.svg" alt="Python" />
                    <img src="/assets/images/skills/skill4.svg" alt="MySQL" />
                    <img src="/assets/images/skills/skill5.svg" alt="vitejs" />
                    <img src="/assets/images/skills/skill6.svg" alt="TensorFlow / PyTorch" />
                    <img src="/assets/images/skills/skill7.svg" alt="OpenCV" />
                    <img src="/assets/images/skills/skill8.svg" alt="Git & Linux" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

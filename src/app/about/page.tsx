
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description:
    "Tentang Auvar Mahsa Fahlevi — Sarjana Komputer, pendidik teknologi, full-stack developer, dan peneliti Computer Vision & Machine Learning.",
};


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

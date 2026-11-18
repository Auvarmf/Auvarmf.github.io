

import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'
export const metadata: Metadata = {
  title: "Arsip Kanal YouTube — Auvar MF",
  description:
    "Arsip video tutorial akademis, tugas praktikum pemrograman, hingga eksplorasi teknologi selama masa perkuliahan Ilmu Komputer: Java, OOP, dan Kecerdasan Artifisial.",
}


export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}

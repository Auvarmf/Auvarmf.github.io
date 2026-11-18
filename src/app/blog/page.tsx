import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Media",
  description:
    "Arsip video tutorial akademis, tugas praktikum pemrograman, dan eksplorasi teknologi dari kanal YouTube Auvar MF.",
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

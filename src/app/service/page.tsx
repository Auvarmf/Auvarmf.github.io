 
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Services",
  description:
    "Layanan yang saya tawarkan: full-stack web development, computer vision & ML research, pelatihan IT, dan infrastruktur sekolah.",
};


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}

import Projects from '@/components/projects' 
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Proyek unggulan Auvar Mahsa Fahlevi: AGATRA school admin, face recognition attendance, QR card generator, dan riset multi-backbone CNN.",
};


export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}

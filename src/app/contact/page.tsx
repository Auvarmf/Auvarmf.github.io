 
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Auvar Mahsa Fahlevi untuk kolaborasi pengembangan web, riset AI, atau pelatihan teknologi.",
};


export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}

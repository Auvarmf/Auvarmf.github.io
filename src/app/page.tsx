 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: "Auvar Mahsa Fahlevi — Educator, Developer & AI Researcher",
  description:
    "Guru Informatika & KKA, Full-Stack Web Developer, dan peneliti Computer Vision & Machine Learning di Metro, Lampung.",
};


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}

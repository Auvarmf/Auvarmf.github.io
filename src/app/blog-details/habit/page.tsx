import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Habit from "@/components/habit";

export const metadata: Metadata = {
  title: "HABIT — Habit-First Web Blueprint",
  description:
    "Kerangka analisis kebutuhan tiga langkah (Data → Kebiasaan Pengguna → Implementasi) untuk merumuskan blueprint / PRD sistem informasi web dari kebiasaan kerja nyata pengguna.",
};

export default function index() {
  return (
    <Wrapper>
      <Habit />
    </Wrapper>
  );
}
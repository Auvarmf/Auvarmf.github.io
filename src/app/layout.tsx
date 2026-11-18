import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://auvarmf.github.io"),
  title: {
    default: "Auvar Mahsa Fahlevi — Educator, Developer & AI Researcher",
    template: "%s | Auvar Mahsa Fahlevi",
  },
  description:
    "Portofolio Auvar Mahsa Fahlevi, S.Kom. — Guru Informatika & KKA, Full-Stack Web Developer, dan peneliti Computer Vision & Machine Learning di Metro, Lampung, Indonesia.",
  keywords: [
    "Auvar Mahsa Fahlevi",
    "Full-Stack Developer",
    "Computer Vision",
    "Machine Learning",
    "Guru Informatika",
    "Koding dan Kecerdasan Artifisial",
    "Metro Lampung",
  ],
  authors: [{ name: "Auvar Mahsa Fahlevi" }],
  openGraph: {
    type: "website",
    title: "Auvar Mahsa Fahlevi — Educator, Developer & AI Researcher",
    description:
      "Bridging Education, Artificial Intelligence, and Pragmatic Web Engineering.",
    url: "https://auvarmf.github.io",
    siteName: "Auvar Mahsa Fahlevi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
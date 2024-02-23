import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./ui/navbar";

const proxima = localFont({
  src: [
    {
      path: "./static-fonts/ProximaSoft-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "./static-fonts/ProximaSoft-Medium.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "./static-fonts/ProximaSoft-Regular.woff2",
      weight: "500",
      style: "bold",
    },
    {
      path: "./static-fonts/ProximaSoft-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Moonática - Astrología y Tarot inicial",
  description:
    "¡Bienvenidxs a Soy Moonática! 🌙 Descubre el fascinante mundo de la astrología y el tarot, incluyendo la interpretación de tu carta natal y el significado profundo de los signos del zodíaco. Explora la esencia genuina de quiénes somos a través de la astrología natal y desata el efecto dominó en tu vida. Encuentra la interpretación detallada de tu carta natal, que revela las posiciones planetarias, aspectos astrológicos y significados de las casas astrológicas. Además, sumérgete en el significado único de cada signo zodiacal, comprendiendo sus características, personalidad, elementos y modalidades. Acompáñanos en este viaje de autoconocimiento y exploración cósmica mientras reconectamos con nuestra esencia más auténtica y descubrimos las maravillas del universo que nos rodea.",
  keywords:
    "astrología, tarot, carta natal, signos zodiacales, autoconocimiento, exploración cósmica, revolución solar, talleres, cursos, luna, luna astrología, luna en piscis, signo de zodíaco",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-b from-[#f9e9f2] to-[#d1eeee]">
      <body className={proxima.className}>{children}</body>
    </html>
  );
}

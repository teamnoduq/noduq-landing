import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "NODUQ — el pago ya llegó",
  description:
    "NODUQ confirma el pago QR en el mostrador. El aviso llega por SMS. El correo lo refuerza.",
  icons: {
    icon: "/logos/logo-nq-cian-noche.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${outfit.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

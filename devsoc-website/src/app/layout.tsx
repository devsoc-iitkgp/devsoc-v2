import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DevSoc — Developer Society",
  description:
    "The official website of DevSoc, the university developer society. Build together, grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
